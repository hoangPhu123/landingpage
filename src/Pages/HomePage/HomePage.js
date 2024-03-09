import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Restaurants from "./Restaurants/Restaurants";
import Send from "./Send/Send";
import Specialities from "./Specialities/Specialities";
import Menu from "./Menu/Menu";
import Map from "./Map/Map";
import Insta from "./Insta/Insta";
import Footer from "./Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Restaurants />
      <Send />
      <Specialities />
      <Menu />
      <Map />
      <Insta />
      <Footer />
    </div>
  );
}

export default HomePage;
