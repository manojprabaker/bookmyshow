import React from "react";
import TheatreShowSelect from "./TheatreShowSelection/TheatreShowSelect";
import Theatre from "./TheatreSelection/Theatre";
import { useSearchParams } from "react-router-dom";
const TheatreFullSelection = () => {
  const [searchParams] = useSearchParams();
  let sp = searchParams.get("id");
  //console.log(sp);
  return (
    <div>
        <Theatre sp={sp}/>
        <TheatreShowSelect sp={sp}/>
    </div>
  )
}

export default TheatreFullSelection