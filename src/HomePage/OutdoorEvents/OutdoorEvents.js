import React, { Component } from "react";
import Slider from "react-slick";
import "./OutdoorEvents.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import OutdoorEvents from "./OutdoorEventsList.js";
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
        <div className="outdoorEvents-sec">
          <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
            
            <h2 className="outdoorEvents-title">Outdoor Events</h2>
            <Slider {...settings}>
              {OutdoorEvents.map((ml) => {
                return (
                  <Grid className="outdoorEvents box">
                    <div className="outdoorEvents">
                      <img src={ml.src} alt="movies" />
                    </div>
                    <div className="outdoorEvents-details">
                    <h3 className="name">{ml.name}</h3>
                      <p className="place">{ml.place}</p>
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