import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Restaurants from "./Restaurants/Restaurants";
import Send from "./Send/Send";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Restaurants />
      <Send />
    </div>
  );
}

export default HomePage;
