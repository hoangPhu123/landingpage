import React from "react";
import insta1 from "./../../../assets/img/insta1.png";
import insta2 from "./../../../assets/img/insta2.png";
import insta3 from "./../../../assets/img/insta3.png";
import insta4 from "./../../../assets/img/insta4.png";
import "./insta.scss";

function Insta() {
  return (
    <div className="insta">
      <div className="insta-container">
        <div className="insta-content">
          <div className="insta-content-title">
            <h2>#YellowKitchens</h2>
            <span>in instagram</span>
          </div>
          <div className="insta-content-element columns-4 gap-5">
            <img src={insta1} alt="" />
            <img src={insta2} alt="" />
            <img src={insta3} alt="" />
            <img src={insta4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insta;
