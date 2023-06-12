import React, { Component } from "react";
import Slider from "react-slick";
import liveEventsList from "./LiveEventsList.js";
import "./LiveEvents.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <div className="live-events-sec">
          <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
            <h2 className="live-events-title"> The Best of Live Events </h2>
            <Slider {...settings}>
              {liveEventsList.map((ml) => {
                return (
                  <Grid className="box">
                    <div className="live-events">
                      <img src={ml.src} alt="movies" />
                    </div>
                  </Grid>
                );
              })}
            </Slider>
            {/* -----------slider-end---------------- */}
          </Container>
        </div>
      );
    }
  }
