import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.scss";

function Header() {
  return (
    <div>
      <div className="container-header">
        <div className="leftHeader">
          <img src="/logo.png" alt="img" />
        </div>

        <div className="rightHeader">
          <div className="login">
            <div className="logo ">
              <FontAwesomeIcon icon={faUser} />
            </div>

            <h3>Log in</h3>
          </div>
          <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <h9>0</h9>
          </div>
          <div className="menu">
            <FontAwesomeIcon icon={faBars} className="logo-menu" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
