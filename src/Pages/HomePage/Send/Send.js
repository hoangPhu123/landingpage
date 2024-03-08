import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./send.scss";

function Send() {
  return (
    <div className="send">
      <div className="send-container">
        <div className="send-content">
          <div className="send-content-left">
            <h1>Your nearest restaurants</h1>
            <h5>
              Each kitchen works with its own delivery area to deliver food to
              you as soon as possible
            </h5>
          </div>

          <div className="send-content-right">
            <form>
              <div className="input">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="send-content-right-icon"
                />
                <input type="text" placeholder="Enter delivery address" />
              </div>

              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Send;
