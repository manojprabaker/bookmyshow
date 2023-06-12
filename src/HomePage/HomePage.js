import React from 'react'
import Navbar from "./NavBar/NavBar.tsx"
import NavBarBottom from './NavBar/NavBarBottom.js'
import Banner from "./Banner/Banner.js"
import Movies from "./Movies/Movies.js"
import LiveEvents from "./LiveEvents/LiveEvents.js"
import Premires from "./Premires/Premires.js"
import EventsNearBy from "./EventsNearBy/EventsNearBy.js";
import OnlineEvents from "./OnlineEvents/OnlineEvents.js"
import OutdoorEvents from "./OutdoorEvents/OutdoorEvents.js";
import GamesSports from "./GamesSportsEvents/GamesSports.js";
import Footer from "./Footer/Footer.js"

const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <NavBarBottom/>
    <Banner/>
    <Movies/>
    <LiveEvents/>
    <Premires/>
    <EventsNearBy/>
    <OnlineEvents/>
    <OutdoorEvents/>
    <GamesSports/>
    <Footer/>
    </div>
  )
}

export default HomePage