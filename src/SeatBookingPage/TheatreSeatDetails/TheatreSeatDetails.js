// import React from "react";
import { useState } from "react";
import "./TheatreSeatDetails.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import theatreSeatDetails from "./TheatreSeatDetailsList.js";
import PoupList from "./PopupList";

import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";

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

import SeatChoosing from "../SeatChoosing/SeatChoosing.js";
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

const TheatreSeatDetails = () => {
  const [popupState, setPopup] = useState(
    "https://i.ibb.co/VSr10NL/resize-1686061565642467046motorcycle.jpg"
  );
  const [flag, setFlag] = useState(0);
  const [clickCount, setClickCount] = useState();
  const [clickedItem, setClickedItem] = useState(null);
  const [noOfSeats,setNoOfSeats] = useState(2);
  
 
 
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
  return (
    <div>
      <div className="theatre-sec-seat-page">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          {updatedSeat.map((mng) => {
            return (
              <div className="movie-details-seat-page">
                <div>
                  <p className="movie-name-seat-page">{mng.name}</p>
                </div>
                <div>
                  <button
                    className="seat-count-change-btn"
                    onClick={handleClickOpen}
                  >
                    
                    {noOfSeats} Tickets <i class="fa-solid fa-pen"></i>
                  </button>
                </div>
                {/* <div className="movie-category">
                  <span className="movie-genre">{mng.genre}</span>
                  <span className="movie-genre">{mng.genre1}</span>
                  {mng.hasOwnProperty('genre2') && <span className="movie-genre">{mng.genre2}</span>}
                  {mng.hasOwnProperty('genre3') && <span className="movie-genre">{mng.genre3}</span>}
                  {/* <span className="movie-genre">{mng.hasOwnProperty("genre2")?{mng.genre2}.null}</span> */}
                {/* </div> */}
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
      <SeatChoosing noOfSeats={noOfSeats}/>
    </div>
  );
};

export default TheatreSeatDetails;
