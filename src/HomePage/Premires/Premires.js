import React, { Component } from "react";
import Slider from "react-slick";
import "./Premires.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import premiresList from "./PremiresList.js";
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
      <div className="premires-sec">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          <div className="premires-logo">
            <img
              src={
                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              }
            />
          </div>
          <h2 className="premires-title">Premires </h2>
          <p className="premires-title"> Brand new releases every Friday</p>
          <Slider {...settings}>
            {premiresList.map((ml) => {
              return (
                <Grid className="premires-box box">
                  <div className="live-events">
                    <img src={ml.src} alt="movies" />
                  </div>
                  <div className="premire-details">
                  <h3 className="name">{ml.name}</h3>
                    <p className="lang">{ml.lang}</p>
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
