import React from 'react'
import SeatChoosing from './SeatChoosing/SeatChoosing.js';
import TheatreSeatDetails from './TheatreSeatDetails/TheatreSeatDetails.js';
import { useSearchParams } from "react-router-dom";
const SeatBookingFullPage = (props) => {
  const [searchParams] = useSearchParams();
  let noS = searchParams.get("noS");
 // let noS=props.noS
  return (
    <div>
        <SeatChoosing noS={noS}/>
        
    </div>
  )
}

export default SeatBookingFullPage