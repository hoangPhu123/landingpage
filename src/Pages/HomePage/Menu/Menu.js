import React from "react";
import kitchen from "./../../../assets/img/kitchen.png";
import specialities from "./../../../assets/img/specialties.png";
import restaurants from "./../../../assets/img/restaurant.png";
import costs from "./../../../assets/img/costs.png";
import "./menu.scss";

function Menu() {
  return (
    <div className="kit">
      <div className="kit-container">
        <div className="kit-content columns-5">
          <img src={kitchen} alt="" className="" />
          <img src={specialities} alt="" className="" />
          <img src={restaurants} alt="" className="" />
          <img src={costs} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
