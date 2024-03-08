import img from "./../../../assets/img/banner1.png";
import img1 from "./../../../assets/img/b1.png";
import img2 from "./../../../assets/img/b2.png";
import img3 from "./../../../assets/img/b3.png";
import React from "react";
import "./banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content flex justify-between">
        <div className="left-banner">
          <h1 className="font-normal">Your Food court at home</h1>

          <div className="left-banner-content flex justify-left">
            <div className="left-element">
              <h2 className="text-lg font-medium">Delivery</h2>
              <h5 className="text-xs font-light text-center">Order in</h5>
            </div>
            <div className="right-element">
              <h2 className="text-lg font-medium">Takeout</h2>
              <h5 className="text-xs font-light text-center">Grab and go</h5>
            </div>
          </div>
        </div>

        <div className="right-banner">
          <img src={img} alt="img" />
        </div>
      </div>

      <div className="delivery rounded-sm columns-3 md:columns-3 sm:columns-3">
        <div className="delivery-content">
          <img src={img3} alt="" />
          <h3>delivery in all paris in less than 30 minutes</h3>
        </div>
        <div className="delivery-content">
          <img src={img2} alt="" />
          <h3>Free delivery from 29 euros</h3>
        </div>
        <div className="delivery-content">
          <img src={img1} alt="" />
          <h3>Only fresh and French products</h3>
        </div>
      </div>
    </div>
  );
}

export default Banner;
