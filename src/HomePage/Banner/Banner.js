import React, { Component } from "react";
import Slider from "react-slick";
import "./Banner.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BannerList from "./BannerList.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
      <div className="banner-sec">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          <Slider {...settings}>
            {BannerList.map((ml) => {
              return (
                  <div className="banner">
                    <img src={ml.src} alt="movies" />
                  </div>
              );
            })}
          </Slider>
          {/* -----------slider-end---------------- */}
        </Container>
      </div>
    );
  }
}
