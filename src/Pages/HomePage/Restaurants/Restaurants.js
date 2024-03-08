import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import { NavLink } from "react-router-dom";
import "./restaurants.scss";
import res1 from "./../../../assets/img/res4.png";
import res2 from "./../../../assets/img/res3.png";
import res3 from "./../../../assets/img/res2.png";
import res4 from "./../../../assets/img/res1.png";

const data = [
  {
    avatar: res1,
  },
  {
    avatar: res2,
  },
  {
    avatar: res3,
  },
  {
    avatar: res4,
  },
  {
    avatar: res1,
  },
  {
    avatar: res2,
  },
];

function Restaurants() {
  return (
    <div className="restaurant">
      <div className="resta-container">
        <div className="resta-content">
          <div className="resta-content-title">
            <div className="resta-content-title-left">
              <h2>Restaurants</h2>
            </div>

            <NavLink className="resta-content-title-right" to="/">
              show all
            </NavLink>
          </div>

          <div className="resta-content-swiper pt-4 ">
            <Swiper
              loop
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data.map(({ avatar }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div>
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

export default Restaurants;
