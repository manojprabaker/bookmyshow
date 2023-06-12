import { useState } from "react";
import "./TheatreShowSelect.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import theatreTimingList from "./TheatreShowList";
import { theatreNamelist } from "./TheatreShowList";

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import PoupList from "./PopupList";
import Bicyle from "./bicycle.jpg"
import MotorCycle from "./motorcycle.jpg"
import AutoRickSaw from "./autoRicksaw.png"
import SmallCar from "./smallcar.jpg"
import SedanCar from "./sedanCar.jpg"
import Bus from "./bus.png";
import popupList from "./PopupList";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
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
            position: 'absolute',
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





const TheatreShowSelect = (props) => {
  const [popupState, setPopup] = useState("https://i.ibb.co/VSr10NL/resize-1686061565642467046motorcycle.jpg");
  const [flag,setFlag]=useState(0);
  const[clickCount,setClickCount]=useState();
  const [clickedItem, setClickedItem] = useState(null);

  const navigate = useNavigate();
  let id = props.sp;
  let theatreListUpdated = theatreNamelist.filter((e) => {
    return e.id == id;
  });
  //console.log(theatreListUpdated);
  //console.log(theatreNamelist);
  //console.log(theatreTimingList);
 
  let tempPopList=PoupList[0]
  //console.log(tempPopList.src);
  // ---------------HOVER------------
 const HoverOn=(id)=>{

  let temp=popupState;
  let ptemp=PoupList.filter((p)=>{
    return(
      p.id==id
    )
  })
   // console.log(ptemp[0].src);
    let pSrc=ptemp[0].src;
    setPopup(pSrc);
  }
  const HoverOff=()=>{
    if(flag==0)
    {
      console.log("flag pass");
      let defSrc="https://i.ibb.co/VSr10NL/resize-1686061565642467046motorcycle.jpg";

      setPopup(defSrc)
    
    }
    else{
      let afterCLick=clickCount;
      setPopup(afterCLick);
    }
  
  }

  // ------select no of seats & go next pag------
 const seatCountFn=(id, e)=>{
  
  let tempFlag=flag;
  tempFlag=1;
  setFlag(tempFlag)
  //console.log(id,"pass");
  let pTemp=PoupList.filter((p)=>{
    return p.id==id
  });
  let pSrc=pTemp[0].src;
  //console.log(pSrc);
  setPopup(pSrc);
  setClickCount(pSrc);
  //console.log(e.target)
  let selectedTag = id;
  setClickedItem(selectedTag);

 }
  const goNextPage=()=>{
    let noS=clickedItem;
    navigate(`/SeatBookingFullPage?noS=${noS}`);
  }
  //---------------------POP-UP----------------
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    <div>
      <div className="theatreshow-sec">
        <Container
          className="cont-theatreshow"
          sx={{ maxWidth: "99%" }}
          maxWidth={false}
        >
          <div className="margin-div">
            <div class="legends-container">
              <div class="showtimes-legend">
                <div class="legend-icon"></div>
                <div class="legend-text">Available</div>
              </div>
              <div class="showtimes-legend">
                <div class="legend-icon fast"></div>
                <div class="legend-text">Fast Filling</div>
              </div>
              <div class="showtimes-legend">
                <div class="subtitle">LAN</div>
                <div class="legend-text">Subtitles Language</div>
              </div>
            </div>

            {theatreListUpdated.map((tlu) => {
              return (
                <div className="movie-venue">
                  <div className="venue-box">
                    <div className="theatre-venue">
                      <div className="theatre-name-ticket">
                        <i class="fa-regular fa-heart"></i>
                        <span className="theatre-name">{tlu.name}</span>
                        <div className="theatre-icons">
                          <span className="m-ticket">
                            <i class="bi bi-phone"></i>
                            M-Ticket
                          </span>
                          <span className="snacks-drinks">
                            <i class="fa-solid fa-mug-hot"></i>
                            Food & Beverages
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="theatre-timings">
                      <div className="avail-show-timings">
                        {theatreTimingList.map((e) => {
                          return (
                            <div className="show-timings-box" onClick={handleClickOpen}>
                              <div className="timings">{e.timings}</div>
                              <div className="theatre-atmos">4K DOLBY 7.1</div>
                            </div>
                          );
                        })}
                        
                      </div>
                      <div className="cancellations">
                        <span class="gold-icon"></span>
                        <span className="cancel-details">Non-cancellable</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <div class="footer-logo-line"></div>
          <img src={"https://in.bmscdn.com/webin/common/icons/logo.svg"} />
          <div class="footer-logo-line"></div>
        </div>

        <div className="social-icons">
          <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved
          </p>
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied.
          </p>
          <p>Unauthorized use is prohibited and punishable by law.</p>
        </div>
      
      </div>
      <div>
      {/* ---------------------POP-UP---------------- */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          How Many Seats?
        </BootstrapDialogTitle>
        <DialogContent dividers className="seat-content">
         
          {<div className="seat-count-vehicle">
            <img src={(popupState)}/>
            </div>}
          <div className="seat-count-number">
            {PoupList.map((p)=>{
              return(
                <div className="seat-nos">
                <span className={p.id === clickedItem ? "clicked-seat-no" : null} onMouseEnter={()=>HoverOn(p.id)} onMouseLeave={()=>HoverOff()}
                onClick={(e)=>seatCountFn(p.id, e)}>
                  {p.id}</span>
                </div>
              )
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
            <button className="select-seatBtn" onClick={goNextPage}>Select Seats</button>
          </div>
        </div>
      </BootstrapDialog>
    </div>
    </div>
  );
};

export default TheatreShowSelect;




