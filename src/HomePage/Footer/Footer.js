import React, { Component } from "react";
import "./Footer.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
//import React from 'react'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Footer() {
  return (
    <div className="footer-sec">
      <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
        <div className="footer-top">
          <div className="footer-img">
            <img src={"https://in.bmscdn.com/webin/common/icons/hut.svg"} />
          </div>
          <div className="footer-top-inner">
            <span>List Your Show</span>
            <span>
              Got a show, event, activity or a great experience? Partner with us
              & get listed on BookMyShow
            </span>
          </div>
          <div className="footer-contact">
            <Button variant="contained">Contact today !</Button>
            
          </div>
        </div>
        <div className="footer-help">
          <div className="call">
            {/* <SupportAgentIcon/> */}
            <i class="fa-solid fa-headset"></i>
            <p>24/7 CUSTOMER CARE</p>
          </div>
          <div className="booking">
            <i class="fa-solid fa-ticket"></i>
            <p>Resend booking confirmation</p>
          </div>
          <div className="newsletter">
            <i class="fa-solid fa-envelope"></i>
            <p>Subscribe to newsletter</p>
          </div>
        </div>

        <div className="footer-movies-list">
          <h3>Movies Now Showing in Chennai</h3>
          <p>
            Pichakaran | Kammare Mooriam Good Night | Fast X | Ponniyan ehrana 2
            | Kasten kademie Theem Randal | The Lime Mermaid Charms of the
            Cintasy Vol 3
          </p>
        </div>
        <div className="footer-movies-list">
          <h3>UPCOMING MOVIES IN CHENNAI</h3>
          <p>
            PPL Live Screening Final | Crcus Maniakan Path-The Evoluson | Found
            Mom Ages The Spider-Verse To Concealer || Wish Radha Ramona Una Pute
            Ardhangini Model hasnjom Chicaliano | Raghupati Chowk
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>MOVIES BY GENRE</h3>
          <p>
            Menu Movies | Action Moses | Crampay Movies | Thaler Movies Fantasy
            Monts Am Moves A Mom Movies Come Movies Mpones DeanMayes Mymological
            Movies | New Mules Plocel Mortes Supermatual Movies | Sorts Movies
            Hit Movies Movies Movie Tragedy Mules Home Movies Paychological
            Mones Mystery Movies Movies War Moves Pod Movies Musical Movies |
            Ballywood Movies Adult Movies Screning Movies
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>MOVIES BY LANGUAGE</h3>
          <p>
            Movies English Molites in Tamil Moles in Japanese Momes in Telugu
            Movies Hindi Movies in Malayalam Males in Chattisgams Moles in Khas
            Moines in English TD Movies in lopull Movies in Portuguese Moxies in
            French Movies in Bhojpuri Movies in Tulu Moxies in Rajathers |
            Movies in Korian | Movies in Estates | Moxima Odin ||Movies in
            Gujarati | Muries in Haryanaul | Modes in Sindis | Movies in Bengali
            | Moxies in Punjabi) Movien ie Demo | Moves Kannada | Mas marath
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>PLAYS BY GENRE IN CHENNA</h3>
          <p>
            Adaptation Plays | Comunity Play | Dame Play Action Plans |
            Minologial Plays | Now Play Delineating Ples Piece Political Piers |
            Ture Plore | SF Plays Suspense Playscal Piers Tiller Plays Tragedy
            Pla Home Play Paychological Plays Mary Plays mame Plays | Broadway
            Plays Blogmony Plays War Plays Paned Plays Classic Plays Are Plays
            Musical era | Regera Playa Adut Plays Fantasy Pl Contemporary Plays
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>MOVIE REVIEWS AND TRENDING ARTICLES</h3>
          <p>
            Trending Articles Latest News on Mones Ever Plays and Sponsore
            Celebs
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>THINGS TO DO IN CHENNAI</h3>
          <p>
            Adventure | Amusement Parks | Festivals | Durga Puja Festival | Food
            and Drinks | Holi Parties | Antiques, Heritage, Museums | Christmas
            Celebrations | Hilsa Festival | Gaming | Hospitals | Poila Baishakh
            Festival | Parties | Unique Tours | Navratri | Quizzes and
            Competitions | Shops and Malls | Tourist Attractions | Monuments |
            Nightlife | Valentine's Day Celebrations
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>SPORTS EVENTS IN CHENNAI</h3>
          <p>
            Online Games | Chess | E Sports | Cricket | Online Sports | Running
            | Athletics | Archery | Baseball | Badminton | Cycling | Golf |
            Kickboxing | Boat Race | Boxing | Card Games | Derby Horse Race |
            Football | Kabaddi | Mixed Martial Arts | Muay Thai | Swimming |
            Pool | Rugby | Hockey | Ice Skating | Judo | Triathlon | Motorsports
            | Walking | Shooting | Tennis | Wrestling | Sailing | Snooker |
            Basketball | Bowling | Polo | Volleyball | Table Tennis | Weight
            Lifting
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>EVENTS IN CHENNAI</h3>
          <p>
            Comedy Shows | Workshops | Music Shows | Kids | Spirituality |
            Meetups | Talks | Beer Festival | Conferences | Exhibitions |
            Celebrity Wishes | Award shows | Online Streaming Events | Screening
            | Vaccination | New Year Parties
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>CINEMAS IN TOP CITIES</h3>
          <p>
            Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai |
            Cinemas in Bengaluru | Cinemas in Hyderabad | Cinemas in Pune |
            Cinemas in Ahmedabad | Cinemas in Kolkata | Cinemas in Kochi
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>EVENTS IN TOP CITIES</h3>
          <p>
            Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events
            in Bengaluru | Events in Hyderabad | Events in Pune | Events in
            Ahmedabad | Events in Kolkata | Events in Kochi
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>PLAYS IN TOP CITIES</h3>
          <p>
            Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in
            Bengaluru | Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad
            | Plays in Kolkata | Plays in Kochi
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>ACTIVITIES IN TOP CITIES</h3>
          <p>
            Things to do in Mumbai | Things to do in Delhi-NCR | Things to do in
            Chennai | Things to do in Bengaluru | Things to do in Hyderabad |
            Things to do in Pune | Things to do in Ahmedabad | Things to do in
            Kolkata | Things to do in Kochii
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>MOVIES IN TOP CITIES</h3>
          <p>
            Movies in Mumbai | Movies in Delhi-NCR | Movies in Chennai | Movies
            in Bengaluru | Movies in Hyderabad | Movies in Pune | Movies in
            Ahmedabad | Movies in Kolkata | Movies in Kochi
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>HELP</h3>
          <p>
            About Us | Contact Us | Current Opening | Press Release | Press
            Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy
          </p>
        </div>

        <div className="footer-movies-list">
          <h3>BOOKMYSHOW EXCLUSIVES</h3>
          <p>
            Lollapalooza India | Superstar | BookASmile | Corporate Vouchers |
            Gift Cards | List My Show | Offers | Stream | Buzz | Movie Trailers
            | Summer Activities
          </p>
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
              Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights
              Reserved
            </p>
            <p>
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
            </p>
            <p>Unauthorized use is prohibited and punishable by law.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
