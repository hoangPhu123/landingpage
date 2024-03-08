import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import { NavLink } from "react-router-dom";
import bagel from "./../../../assets/img/spe1.png";
import burger from "./../../../assets/img/spe2.png";
import chicken from "./../../../assets/img/spe3.png";
import fish from "./../../../assets/img/spe4.png";
import chips from "./../../../assets/img/spe5.png";
import salads from "./../../../assets/img/spe6.png";
import pizza from "./../../../assets/img/spe7.png";
import pasta from "./../../../assets/img/spe8.png";
import "./specialities.scss";

const data = [
  {
    avatar: bagel,
  },
  {
    avatar: burger,
  },
  {
    avatar: chicken,
  },
  {
    avatar: fish,
  },
  {
    avatar: chips,
  },
  {
    avatar: salads,
  },
  {
    avatar: pizza,
  },
  {
    avatar: pasta,
  },
  {
    avatar: bagel,
  },
  {
    avatar: burger,
  },
  {
    avatar: chicken,
  },
];

function Specialities() {
  return (
    <div className="specialities">
      <div className="spe-container">
        <div className="spe-content">
          <div className="spe-content-title">
            <div className="spe-content-title-left">
              <h2>Specialities</h2>
            </div>

            <NavLink className="spe-content-title-right" to="/">
              show all
            </NavLink>
          </div>
          <div className="spe-content-swiper pt-2">
            <Swiper
              loop
              slidesPerView={8}
              spaceBetween={30}
              freeMode={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data.map(({ avatar }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="spe-content-swiper-img mr-0">
                      <img src={avatar} alt="img" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialities;
