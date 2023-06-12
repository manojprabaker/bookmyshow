import React from 'react'
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import MoviesPage from "./MoviesPage/MoviesPage"
import HomePage from './HomePage/HomePage';
import TheatreFullSelection from "./ThirdPage/TheatreFullSelection"
import SeatBookingFullPage from './SeatBookingPage/SeatBookingFullPage';
import CheckOut from './CheckOutPage/CheckOut.js';

// --------------redux-import--------------
import { Provider,useSelector } from 'react-redux'
import { store } from "./Store/Store";





function Router() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/> 
    <Route path="/MoviesPage" element={<MoviesPage/>}/>
    <Route path="/TheatreFullSelection" element={<TheatreFullSelection/>}/>
    <Route path="/SeatBookingFullPage" element={<SeatBookingFullPage/>}/>
    <Route path="/CheckOut" element={<CheckOut/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
  )
}

export default Router;