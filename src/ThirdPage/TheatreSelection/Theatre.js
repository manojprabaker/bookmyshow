import React from "react";
import "./Theatre.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TheatreList from "./TheatreList.js";
import { movieDates } from "./TheatreList.js";
import { movieNamesGenre } from "./TheatreList.js";
const Theatre = (props) => {
  let id = props.sp;
  //console.log(movieNamesGenre);
  let mngUpdated = movieNamesGenre.filter((e) => {
    return e.id == id;
  });
  
  
  return (
    <div>
      <div className="theatre-sec">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          {mngUpdated.map((mng) => {
            return (
              <div className="movie-details">
                <p className="movie-name">{mng.name}</p>
                <div className="movie-category">
                  <span className="movie-genre">{mng.genre}</span>
                  <span className="movie-genre">{mng.genre1}</span>
                  {mng.hasOwnProperty('genre2') && <span className="movie-genre">{mng.genre2}</span>}
                  {mng.hasOwnProperty('genre3') && <span className="movie-genre">{mng.genre3}</span>}
                  {/* <span className="movie-genre">{mng.hasOwnProperty("genre2")?{mng.genre2}.null}</span> */}
                </div>
              </div>
            );
          })}
          
        </Container>
      </div>
      <div className="date-selection-sec">
        <Container
          className="cont-theatre"
          sx={{ maxWidth: "95%" }}
          maxWidth={false}
        >
          <div className="date-row">
            {movieDates.map((md, i) => {
              return (
                <div className="main-date-row" key={i}>
                  <div className="movie-dates current-date">
                    <p className="movie-date-day">{md.day}</p>
                    <p className="movie-date-date">{md.date}</p>
                    <p className="movie-date-month">{md.mon}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-lang-theatre">Tamil</div>
        </Container>
      </div>
    </div>
  );
};
 
export default Theatre;
