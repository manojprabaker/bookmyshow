import React from "react";
import Container from "@mui/material/Container";
import "./NavBarBottom.css"

function NavBarBottom() {
  return (
    <div style={{backgroundColor: "#222539"}}>
        <Container className="nav-bar" sx={{ maxWidth: "95%" }} maxWidth={false}>
      <div className="nav-bot">
        <div className="nav-bot-left">
            <span>Movies</span>
            <span>Stream</span>
            <span>Events</span>
            <span>Plays</span>
            <span>Sports</span>
            <span>Activities</span>
            <span>Buzz</span>
        </div>
        <div className="nav-bot-right">
            <span>ListYourShow</span>
            <span>Corporates</span>
            <span>Offers</span>
            <span>Gift Cards</span>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default NavBarBottom;
