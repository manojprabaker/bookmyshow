//import "./App.css";
// import Movies from "./Movies/Movies.js";
// import LiveEvents from "./LiveEvents/LiveEvents.js";
// import Premires from "./Premires/Premires.js";
// import EventsNearBy from "./EventsNearBy/EventsNearBy.js";
// import OnlineEvents from "./OnlineEvents/OnlineEvents.js";
// import OutdoorEvents from "./OutdoorEvents/OutdoorEvents.js";
// import GamesSports from "./GamesSportsEvents/GamesSports.js";
// import Footer from "./Footer/Footer.js";
// import NavBar from "./NavBar/NavBar.tsx";
// import NavBarBottom from "./NavBar/NavBarBottom.js";
// import Banner from "./Banner/Banner";
// import MoviesPage from "./MoviesPage/MoviesPage.js"
import Router from "./Router.js";
import SeatBookingFullPage from "./SeatBookingPage/SeatBookingFullPage.js";
import HomePage from "./HomePage/HomePage.js";
import CheckOut from "./CheckOutPage/CheckOut.js"
function App() {
  return (
    <div>
      <Router/>
      {/* <NavBar />
      <NavBarBottom />
      <Banner />
      <Movies />
      <LiveEvents />
      <Premires />
      <EventsNearBy />
      <OnlineEvents />
      <OutdoorEvents />
      <GamesSports />
      <Footer /> */}
    </div>
  );
}

export default App;
