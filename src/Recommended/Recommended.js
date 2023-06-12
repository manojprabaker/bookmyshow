import React from "react";
import Grid from "@mui/material/Grid";
import "./Recommended.css";
import Container from "@mui/material/Container";
import cardDetails from "./Recommend.js"
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
//import { Container } from '@mui/material';
//import FavoriteIcon from '@mui/icons-material/Favorite';
function Recommended() {

  return (
    <div>
      <Container sx={{maxWidth:'95%'}} maxWidth={false}>
        <h1>Recommended Movies</h1>
        <Grid container spacing={0}>
        {
          cardDetails.map((c)=>{
            return(
              
              <Grid h1 xs={6} sm={4} md={4} lg={2.4} spacing={0} className="box">
           
              <div className="thumbnail">
                <img
                  src={c.src} 
                />
              </div>
              <div className="rating">{c.star}
                 <span>{c.ratings}</span>{" "}
                <span> {c.votes}</span>
              </div>
          </Grid>
            )
          })
        }
        </Grid>
        {/* <Grid container spacing={0}> */}
          {/* <Grid h1 xs={3} md={2.4}>
            <div>
              <div className="thumbnail">
                <img
                  src={
                    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pichaikkaran-2-et00324847-1683542091.jpg"
                  }
                />
              </div>
              <div className="rating">
                <i class="bi bi-star-fill"></i> <span>7.5/10 </span>{" "}
                <span> 7.6K votes</span>
              </div>
            </div>
          </Grid> */}
          {/* <Grid h1 xs={3} md={2.4}>
            <div>
              <div className="thumbnail">
                <img
                  src={
                    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pichaikkaran-2-et00324847-1683542091.jpg"
                  }
                />
              </div>
              <div className="rating">
                <i class="bi bi-star-fill"></i> <span>7.5/10 </span>{" "}
                <span> 7.6K votes</span>
              </div>
            </div>
          </Grid> */}
          {/* <Grid h1 xs={3} md={2.4}>
            <div>
              <div className="thumbnail">
                <img
                  src={
                    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-x-et00122562-1683110461.jpg"
                  }
                />
              </div>
              <div className="rating">
                <i class="bi bi-star-fill"></i> <span>7.5/10 </span>{" "}
                <span> 7.6K votes</span>
              </div>
            </div>
          </Grid> */}
          {/* <Grid h1 xs={3} md={2.4}>
            <div>
              <div className="thumbnail">
                <img
                  src={
                    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/good-night-et00358164-1682501014.jpg"
                  }
                />
              </div>
              <div className="rating">
                <i class="bi bi-star-fill"></i> <span>7.5/10 </span>{" "}
                <span> 7.6K votes</span>
              </div>
            </div>
          </Grid> */}
          {/* <Grid h1 xs={3} md={2.4}>
            <div>
              <div className="thumbnail">
                <img
                  src={
                    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-2-et00348725-1680776467.jpg"
                  }
                />
              </div>
              <div className="rating">
                <i class="bi bi-star-fill"></i> <span>7.5/10 </span>{" "}
                <span> 7.6K votes</span>
              </div>
            </div>
          </Grid> */}
        {/* </Grid> */}
      </Container>
    </div>
  );
}

export default Recommended;
