import React from 'react'
import SeatChoosing from './SeatChoosing/SeatChoosing.js';
import TheatreSeatDetails from './TheatreSeatDetails/TheatreSeatDetails.js';
import { useSearchParams } from "react-router-dom";
const SeatBookingFullPage = (props) => {
  const [searchParams] = useSearchParams();
  let noS = searchParams.get("noS");
 let id1=searchParams.get("id");

  return (
    <div>
        <SeatChoosing noS={noS} id1={id1}/>
        
    </div>
  )
}

export default SeatBookingFullPage