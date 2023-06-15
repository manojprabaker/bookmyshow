//import React from "react";
import "./SeatChoosing.css";
import { useState ,useEffect} from "react";
import Container from "@mui/material/Container";
import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useNavigate,useSearchParams } from 'react-router-dom';
import theatreSeatDetails from "../TheatreSeatDetails/TheatreSeatDetailsList.js";
import PoupList from "../TheatreSeatDetails/PopupList.js";
import { useSelector,useDispatch } from 'react-redux'
import { updatePrice,updateArr,updateSeatCategory } from "../../Store/Slice";
import MoviesList from "../../HomePage/Movies/MoviesList";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const SeatChoosing = (props) => {
  const [seatSelected, setSeatSelected] = useState(false);
  const [oldSeats, setoldSeats] = useState([]);
  const [payRs, setpayRs] = useState(0);
  const [seatCategory, setSeatCategory] = useState(null);
  const [popupState, setPopup] = useState(
    "https://i.ibb.co/VSr10NL/resize-1686061565642467046motorcycle.jpg"
  );
  const [seatNoChange, setseatNoChange] = useState([]);
  const [flag, setFlag] = useState(0);
  const [clickCount, setClickCount] = useState();
  const [clickedItem, setClickedItem] = useState(null);
  const [noOfSeats,setNoOfSeats] = useState(2);
  const [finalSeats, setfinalSeats] = useState([])
  const [seatFinalObj, setseatFinalObj] = useState([])

  const dispatch=useDispatch();
  const state=useSelector(({data})=>data)
 let theatreNameTime= state.theatreNameTime;
  let showTime=state.showTime;
  const navigate = useNavigate();
 
  let SeatcountsfromlastPage=props.noS;
    let id1=props.id1;
    //console.log(id1);
    let updatedMoviesList=MoviesList.filter((e)=>{return e.id==id1})
    updatedMoviesList=updatedMoviesList[0];
 useEffect(()=>{
  setNoOfSeats(SeatcountsfromlastPage);
}, [])
 //console.log(SeatcountsfromlastPage);
 
  let updatedSeat = theatreSeatDetails;
 // console.log(updatedSeat);

  const HoverOn = (id) => {
    let temp = popupState;
    let ptemp = PoupList.filter((p) => {
      return p.id == id;
    });
    // console.log(ptemp[0].src);
    let pSrc = ptemp[0].src;
    setPopup(pSrc);
  };
  const HoverOff = () => {
    if (flag == 0) {
     // console.log("flag pass");
      let defSrc =
        "https://i.ibb.co/VSr10NL/resize-1686061565642467046motorcycle.jpg";

      setPopup(defSrc);
    } else {
      let afterCLick = clickCount;
      setPopup(afterCLick);
    }
  };

  // ------select no of seats & go next pag------
  const seatCountFn = (id, e) => {
    //popup button to select no of seats
    let tempFlag = flag;
    tempFlag = 1;
    setFlag(tempFlag);
    //console.log(id,"pass");
    let pTemp = PoupList.filter((p) => {
      return p.id == id;
    });
    let pSrc = pTemp[0].src;
    //console.log(pSrc);
    let popUpSeats=pTemp[0].id;
    //console.log(popUpSeats);
    setNoOfSeats(popUpSeats)
    setPopup(pSrc);
    setClickCount(pSrc);
    //console.log(e.target)
    let selectedTag = id;
    setClickedItem(selectedTag);

    let tempSeatNoChange=oldSeats;
    //console.log(tempSeatNoChange);
     for(let i=0;i<tempSeatNoChange.length;i++)
    {
      tempSeatNoChange[i].classList.remove("selected");
    }
    // setseatNoChange(tempSeatNoChange);

    document.getElementsByClassName("tickets-price-display")[0].style.display="none";

  };
  // --------------------------popup------------------ 

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const closeDialog=()=>{
    setOpen(false);

    //console.log(noOfSeats);
   
  }
  // ---------Seat Choosing -Start--------
  let nS = noOfSeats;
  let seatNumbers=[];
  const clickSeat = (row, sS, c, e) => {
  //  console.log(row,sS,nS,c);
    
    let tempsS=sS;
    for(let i=0;i<nS;i++)
    { 
      if(nS - 1 <= c - sS)
      {
        seatNumbers.push(`${row}${tempsS},`);
        tempsS++;
        setfinalSeats(seatNumbers)
     
      }
      else{
        seatNumbers.push(`${row}${tempsS},`);
        tempsS--;
        seatNumbers.reverse();
        setfinalSeats(seatNumbers)
       
      }
      
    }

    dispatch(updateArr(seatNumbers)); //redux-update
    console.log(seatNumbers);
   document.getElementsByClassName("tickets-price-display")[0].style.display="flex";
    if (seatSelected == false) {
        if (row=="A"|| row=="B"|| row=="C"|| row=="D"|| row=="E"|| row=="F"|| row=="G"|| row=="H"|| row=="I"|| row=="J"|| row=="K"|| row=="L"|| row=="M"|| row=="N"|| row=="O")
        {
            let price=nS*190;
            setpayRs(price);
            dispatch(updatePrice(price));
            let seatCat="DIAMOND";
            setSeatCategory(seatCat);
            dispatch(updateSeatCategory(seatCat));
        }
        else{
            let price=nS*60;
            setpayRs(price);
          dispatch(updatePrice(price));
            let seatCat="PEARL";
            setSeatCategory(seatCat);
            dispatch(updateSeatCategory(seatCat));
        }
        

      let tempArr = [];
      if (nS - 1 <= c - sS) {
        let tt = true;
        setSeatSelected(tt);
        console.log("right");
        let arr = e.target.parentNode.getElementsByClassName("avail-seats");
        setseatNoChange(arr);
        for (let i = sS - 1; i <= nS - 1 + sS - 1; i++) {
          arr[i].classList.add("selected");
          tempArr.push(arr[i]);
          setoldSeats(tempArr);
          //console.log(tempArr);
        }
      } else if (nS - 1 >= c - sS) {
        let tt = true;
        setSeatSelected(tt);
        console.log("left");
        let arr = e.target.parentNode.getElementsByClassName("avail-seats");
        setseatNoChange(arr);
        for (let i = sS - 1; i >= sS - 1 - (nS - 1); i--) {
          arr[i].classList.add("selected");
          tempArr.push(arr[i]);
          setoldSeats(tempArr);
        }
      }
    } 
    else 
    {
        if (row=="A"|| row=="B"|| row=="C"|| row=="D"|| row=="E"|| row=="F"|| row=="G"|| row=="H"|| row=="I"|| row=="J"|| row=="K"|| row=="L"|| row=="M"|| row=="N"|| row=="O")
        {
            let price=nS*190;
            setpayRs(price);
            dispatch(updatePrice(price));
        }
        else{
            let price=nS*60;
            setpayRs(price);
            dispatch(updatePrice(price));
        }
        
      console.log("again");
     // console.log(oldSeats);
      let tempArr = oldSeats;
      for (let i = 0; i < tempArr.length; i++) {
        tempArr[i].classList.remove("selected");
      }
    
      if (nS - 1 <= c - sS) {
        let tt = true;
        setSeatSelected(tt);
        console.log("right");
        let arr = e.target.parentNode.getElementsByClassName("avail-seats");
        setseatNoChange(arr);
        for (let i = sS - 1; i <= nS - 1 + sS - 1; i++) {
          arr[i].classList.add("selected");
          tempArr.push(arr[i]);
          setoldSeats(tempArr);
          //console.log(tempArr);
        }
      }
      else if (nS - 1 >= c - sS) {
        let tt = true;
        setSeatSelected(tt);
        console.log("left");
        let arr = e.target.parentNode.getElementsByClassName("avail-seats");
        setseatNoChange(arr);
        for (let i = sS - 1; i >= sS - 1 - (nS - 1); i--) {
          arr[i].classList.add("selected");
          tempArr.push(arr[i]);
          setoldSeats(tempArr);
        }
      }
    }
  };

  const goNext=()=>{
    console.log("next");
    let seatObj={
      cat:seatCategory,
      price:payRs,
      seatNos:finalSeats,
    }
   
    setseatFinalObj(seatObj);
    navigate(`/CheckOut`);
  
  }
  return (
    <div>
      <div className="theatre-sec-seat-page">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          {updatedSeat.map((mng) => {
            return (
              <div className="movie-details-seat-page">
                <div>
                  <p className="movie-name-seat-page">{updatedMoviesList.name}</p>
                  <p className="theatre-name-seat-page">{theatreNameTime}</p>
                  <p className="theatre-time-seat-page">{showTime}</p>
                </div>
                <div>
                  <button
                    className="seat-count-change-btn"
                    onClick={handleClickOpen}
                  >
                    
                    {noOfSeats} Tickets <i class="fa-solid fa-pen"></i>
                  </button>
                </div>
                
              
              </div>
            );
          })}

          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              How Many Seats?
            </BootstrapDialogTitle>
            <DialogContent dividers className="seat-content">
              {
                <div className="seat-count-vehicle">
                  <img src={popupState} />
                </div>
              }
              <div className="seat-count-number">
                {PoupList.map((p) => {
                  return (
                    <div className="seat-nos">
                      <span
                        className={
                          p.id === clickedItem ? "clicked-seat-no" : null
                        }
                        onMouseEnter={() => HoverOn(p.id)}
                        onMouseLeave={() => HoverOff()}
                        onClick={(e) => seatCountFn(p.id, e)}
                      >
                        {p.id}
                      </span>
                    </div>
                  );
                })}
              </div>
            </DialogContent>
            <div className="ticket-rates">
              <div className="tickets-rates-box">
                <div className="diamond-ticket">
                  <p className="category">DIAMOND</p>
                  <p className="ticket-rate">Rs 190.00</p>
                  <p className="avail">Available</p>
                </div>
                <div className="pearl-ticket">
                  <p className="category">PEARL</p>
                  <p className="ticket-rate">Rs 60.00</p>
                  <p className="avail">Available</p>
                </div>
              </div>
              <div className="select-seat-confirm">
                <button className="select-seatBtn"  onClick={closeDialog}>Select Seats</button>
              </div>
            </div>
          </BootstrapDialog>
        </Container>
      </div>
      <div className="seat-choosing-sec">
        <Container
          className="cont-theatreshow"
          sx={{ maxWidth: "80%" }}
          maxWidth={false}
        >
          <div className="seat-diamond">
            <p>DIAMOND-Rs 190.00</p>
          </div>

          <div className="seat-design-diamond">
            <table>
              {/* A  */}
              <tr>
                <td>
                  <div className="seat-row-letter">A</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 1, 20, e)}
                  >
                    1
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 2, 20, e)}
                  >
                    2
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 3, 20, e)}
                  >
                    3
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 4, 20, e)}
                  >
                    4
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 5, 20, e)}
                  >
                    5
                  </div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 6, 20, e)}
                  >
                    6
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 7, 20, e)}
                  >
                    7
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 8, 20, e)}
                  >
                    8
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 9, 20, e)}
                  >
                    9
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 10, 20, e)}
                  >
                    10
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 11, 20, e)}
                  >
                    11
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 12, 20, e)}
                  >
                    12
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 13, 20, e)}
                  >
                    13
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 14, 20, e)}
                  >
                    14
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 15, 20, e)}
                  >
                    15
                  </div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 16, 20, e)}
                  >
                    16
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 17, 20, e)}
                  >
                    17
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 18, 20, e)}
                  >
                    18
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 19, 20, e)}
                  >
                    19
                  </div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("A", 20, 20, e)}
                  >
                    20
                  </div>
                </td>
              </tr>

              {/* B  */}
              <tr>
                <td>
                  <div className="seat-row-letter">B</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div
                    className="avail-seats"
                    onClick={(e) => clickSeat("B", 1, 18, e)}
                  >
                    1
                  </div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 2, 18, e)} >2</div>
                  <div className="avail-seats" 
                   onClick={(e) => clickSeat("B", 3, 18, e)}>3</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 4, 18, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 5, 18, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 6, 18, e)}>6</div>
                  <div className="avail-seats"
                  onClick={(e) => clickSeat("B", 7, 18, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 8, 18, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 9, 18, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 10, 18, e)}>10</div>
                  <div className="avail-seats"
                  onClick={(e) => clickSeat("B", 11, 18, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 12, 18, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 13, 18, e)}>13</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 14, 18, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 15, 18, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 16, 18, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 17, 18, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("B", 18, 18, e)}>18</div>
                </td>
              </tr>

              {/* C */}
              <tr>
                <td>
                  <div className="seat-row-letter">C</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 1, 18, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 2, 18, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 3, 18, e)}>3</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 4, 18, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 5, 18, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 6, 18, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 7, 18, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 8, 18, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 9, 18, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 10, 18, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 11, 18, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 12, 18, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 13, 18, e)}>13</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 14, 18, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 15, 18, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 16, 18, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 17, 18, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("C", 18, 18, e)}>18</div>
                </td>
              </tr>

              {/* D*/}
              <tr>
                <td>
                  <div className="seat-row-letter">D</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 1, 18, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 2, 18, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 3, 18, e)}>3</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 4, 18, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 5, 18, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 6, 18, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 7, 18, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 8, 18, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 9, 18, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 10, 18, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 11, 18, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 12, 18, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 13, 18, e)}>13</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 14, 18, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 15, 18, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 16, 18, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 17, 18, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("D", 18, 18, e)}>18</div>
                </td>
              </tr>

              {/* E */}
              <tr>
                <td>
                  <div className="seat-row-letter">E</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 1, 18, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 2, 18, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 3, 18, e)}>3</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 4, 18, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 5, 18, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 6, 18, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 7, 18, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 8, 18, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 9, 18, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 10, 18, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E",11, 18, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 12, 18, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 13, 18, e)}>13</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 14, 18, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 15, 18, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 16, 18, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 17, 18, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("E", 18, 18, e)}>18</div>
                </td>
              </tr>

              {/* F */}
              <tr>
                <td>
                  <div className="seat-row-letter">F</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 1, 18, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 2, 18, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 3, 18, e)}>3</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 4, 18, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 5, 18, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 6, 18, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 7, 18, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 8, 18, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 9, 18, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 10, 18, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 11, 18, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 12, 18, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 13, 18, e)}>13</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 14, 18, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 15, 18, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 16, 18, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 17, 18, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("F", 18, 18, e)}>18</div>
                </td>
              </tr>

              {/* G*/}
              <tr>
                <td>
                  <div className="seat-row-letter">G</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 1, 20, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 2, 20, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 3, 20, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 4, 20, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 5, 20, e)}>5</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 6, 20, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 7, 20, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 8, 20, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 9, 20, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 10, 20, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 11, 20, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 12, 20, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 13, 20, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 14, 20, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 15, 20, e)}>15</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 16, 20, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 17, 20, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 18, 20, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 19, 20, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("G", 20, 20, e)}>20</div>
                </td>
              </tr>

              {/* H*/}
              <tr>
                <td>
                  <div className="seat-row-letter">H</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 1, 20, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 2, 20, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 3, 20, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 4, 20, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 5, 20, e)}>5</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 6, 20, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 7, 20, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 8, 20, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 9, 20, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 10, 20, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 11, 20, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 12, 20, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 13, 20, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 14, 20, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 15, 20, e)}>15</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 16, 20, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 17, 20, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 18, 20, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 19, 20, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("H", 20, 20, e)}>20</div>
                </td>
              </tr>

              {/* I*/}
              <tr>
                <td>
                  <div className="seat-row-letter">I</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 1, 20, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 2, 20, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 3, 20, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 4, 20, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 5, 20, e)}>5</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 6, 20, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 7, 20, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 8, 20, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 9, 20, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 10, 20, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 11, 20, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 12, 20, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 13, 20, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 14, 20, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 15, 20, e)}>15</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 16, 20, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 17, 20, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 18, 20, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 19, 20, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("I", 20, 20, e)}>20</div>
                </td>
              </tr>

              {/* J*/}
              <tr className="seat-row-j">
                <td>
                  <div className="seat-row-letter">J</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 1, 20, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 2, 20, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 3, 20, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 4, 20, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 5, 20, e)}>5</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 6, 20, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 7, 20, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 8, 20, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 9, 20, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 10, 20, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 11, 20, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 12, 20, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 13, 20, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 14, 20, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 15, 20, e)}>15</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 16, 20, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 17, 20, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 18, 20, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 19, 20, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("J", 20, 20, e)}>20</div>
                </td>
              </tr>

              <tr className="seat-row-empty">
                <td>
                  <div className="seat-row-letter"></div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                </td>
              </tr>

              {/* K*/}
              <tr>
                <td>
                  <div className="seat-row-letter">K</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 1, 22, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 2, 22, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 3, 22, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 4, 22, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 5, 22, e)}>5</div>
                  <div className="avail-seats"onClick={(e) => clickSeat("K", 6, 22, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 7, 22, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 8, 22, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 9, 22, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 10, 22, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 11, 22, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 12, 22, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 13, 22, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 14, 22, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 15, 22, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 16, 22, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 17, 22, e)}>17</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 18, 22, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 19, 22, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 20, 22, e)}>20</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 21, 22, e)}>21</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("K", 22, 22, e)}>22</div>
                </td>
              </tr>

              {/* L */}
              <tr>
                <td>
                  <div className="seat-row-letter">L</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 1, 22, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 2, 22, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 3, 22, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 4, 22, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 5, 22, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 6, 22, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 7, 22, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 8, 22, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 9, 22, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 10, 22, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 11, 22, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 12, 22, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 13, 22, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 14, 22, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 15, 22, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 16, 22, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 17, 22, e)}>17</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 18, 22, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 19, 22, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 20, 22, e)}>20</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L", 21, 22, e)}>21</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("L",22, 22, e)}>22</div>
                </td>
              </tr>

              {/* M */}
              <tr>
                <td>
                  <div className="seat-row-letter">M</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 1, 22, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 2, 22, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 3, 22, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 4, 22, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 5, 22, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 6, 22, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 7, 22, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 8, 22, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 9, 22, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 10, 22, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 11, 22, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 12, 22, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 13, 22, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 14, 22, e)}>14</div>
                  <div className="avail-seats"onClick={(e) => clickSeat("M", 15, 22, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 16, 22, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 17, 22, e)}>17</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 18, 22, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 19, 22, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 20, 22, e)}>20</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M", 21, 22, e)}>21</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("M",22, 22, e)}>22</div>
                </td>
              </tr>

              {/* N */}
              <tr>
                <td>
                  <div className="seat-row-letter">N</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 1, 22, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 2, 22, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 3, 22, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 4, 22, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 5, 22, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 6, 22, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 7, 22, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 8, 22, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 9, 22, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 10, 22, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 11, 22, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 12, 22, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 13, 22, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 14, 22, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 15, 22, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 16, 22, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 17, 22, e)}>17</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 18, 22, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 19, 22, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 20, 22, e)}>20</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 21, 22, e)}>21</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("N", 22, 22, e)}>22</div>
                </td>
              </tr>

              {/* O*/}
              <tr>
                <td>
                  <div className="seat-row-letter">O</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 1, 22, e)}>1</div>
                  <div className="avail-seats"onClick={(e) => clickSeat("O", 2, 22, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 3, 22, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 4, 22, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 5, 22, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 6, 22, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 7, 22, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 8, 22, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 9, 22, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 10, 22, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 11, 22, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 12, 22, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 13, 22, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 14, 22, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 15, 22, e)}>15</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 16, 22, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 17, 22, e)}>17</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 18, 22, e)}>18</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 19, 22, e)}>19</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O",20, 22, e)}>20</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 21, 22, e)}>21</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("O", 22, 22, e)}>22</div>
                </td>
              </tr>
            </table>
          </div>

          <div className="seat-pearl">
            <p>PEARL-Rs 60.00</p>
          </div>

          <div className="seat-design-pearl">
            <table>
              {/* P */}
              <tr>
                <td>
                  <div className="seat-row-letter">P</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="filled-seats">1</div>
                  <div className="filled-seats">2</div>
                  <div className="filled-seats">3</div>
                  <div className="filled-seats">4</div>
                  <div className="filled-seats">5</div>
                  <div className="filled-seats">6</div>
                  <div className="filled-seats">7</div>
                  <div className="filled-seats">8</div>
                  <div className="filled-seats">9</div>
                  <div className="filled-seats">10</div>
                  <div className="filled-seats">11</div>
                  <div className="filled-seats">12</div>
                  <div className="filled-seats">13</div>
                  <div className="filled-seats">14</div>
                  <div className="filled-seats">15</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="filled-seats">16</div>
                  <div className="filled-seats">17</div>
                  <div className="filled-seats">18</div>
                </td>
              </tr>

              {/* Q */}
              <tr>
                <td>
                  <div className="seat-row-letter">Q</div>
                </td>
                <td>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 1, 18, e)}>1</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 2, 18, e)}>2</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 3, 18, e)}>3</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 4, 18, e)}>4</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 5, 18, e)}>5</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 6, 18, e)}>6</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 7, 18, e)}>7</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 8, 18, e)}>8</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 9, 18, e)}>9</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 10, 18, e)}>10</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 11, 18, e)}>11</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 12, 18, e)}>12</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 13, 18, e)}>13</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 14, 18, e)}>14</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 15, 18, e)}>15</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="empty-seats">&nbsp;</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 16, 18, e)}>16</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 17, 18, e)}>17</div>
                  <div className="avail-seats" onClick={(e) => clickSeat("Q", 18, 18, e)}>18</div>
                </td>
              </tr>
            </table>
          </div>

          <div className="screen-area">
            <p className="screen"></p>
            <p className="text">All eyes this way please!</p>
          </div>
          <div className="tickets-price-display">
            <button className="price-display-btn" onClick={goNext}>Pay Rs. {payRs}</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SeatChoosing;
