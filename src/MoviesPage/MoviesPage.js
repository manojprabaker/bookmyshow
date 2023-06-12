import React, { Component } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "./MoviesPages.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MoviesPageList from "./MoviesPageList.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import NavBarBottom from "../HomePage/NavBar/NavBarBottom";

import NavBar from "../HomePage/NavBar/NavBar.tsx"
import { useSearchParams, useNavigate } from "react-router-dom";

function MoviesPage() {
  const navigate = useNavigate();
  // let ml = MoviesPageList[0];
  const [searchParams] = useSearchParams();
  let sp = searchParams.get("id");

  let mplUpdated = MoviesPageList.filter((e) => {
    return e.id == sp;
  });
  //console.log(mplUpdated);

  const goNext = (id) => {
    console.log(id);
    navigate(`/TheatreFullSelection?id=${id}`);
  };
  return (
    <div>
      <NavBar/>
      <NavBarBottom/>
      <div className="movies-page-sec">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          {mplUpdated.map((ml) => {
            return (
              <div>
                <div
                  className="moviespage-row row-bg"
                  style={{
                    backgroundImage: `linear-gradient(90deg,rgb(26, 26, 26) 24.97%,rgb(26, 26, 26) 38.3%,#1a1a1a0a 97.47%,rgb(26, 26, 26) 100%),url('${ml.bg}')`,
                  }}
                >
                  <div className="movies-poster">
                    <img src={ml.src} />
                    <div className="in-cinemas">In cinemas</div>
                  </div>

                  <div className="movie-poster-details">
                    <h1>{ml.name}</h1>
                    <h2>
                      {ml.star}
                      {ml.rating}
                    </h2>
                    <div className="add-rating-review">
                      <div className="add-rating">
                        <p>Add your ratings & review</p>
                        <p> Your ratings matter</p>
                      </div>
                      <div className="rating-btn">
                        <span>Rate now</span>
                      </div>
                    </div>
                    <div className="view-lang">
                      <span>2D</span>
                      <span>Tamil</span>
                    </div>
                    <div className="run-time">{ml.runTime}</div>

                    <div className="book-ticket">
                      <button onClick={() => goNext(ml.id)}>
                        Book tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
      <div className="about-movie-sec">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          {mplUpdated.map((ml) => {
            return (
              <div>
                <div className="about-movie">
                  <h3>About the movie</h3>
                  <p>{ml.movieAbout}</p>
                </div>

                <div className="top-offers">
                  <h3>Top offers for you</h3>
                  <div className="offer-logo">
                    <div className="offer-row">
                      <div className="offer-img">
                        <img
                          src={
                            "https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202"
                          }
                        />
                      </div>
                      <div className="offer-details">
                        <p>10% Off on movie munchies!</p>
                        <p>Tap to view details</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cast">
                  <h3>Cast</h3>
                  <div className="cast-row">
                    <img src={ml.actorimg} />
                    <p>{ml.actorName}</p>
                    <p>Actor</p>
                  </div>
                  <div className="cast-row">
                    <img src={ml.actorimg2} />
                    <p>{ml.actorName2}</p>
                    <p>Actor</p>
                  </div>
                </div>
              </div>
            );
          })}
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
    </div>
  );
}

export default MoviesPage;
