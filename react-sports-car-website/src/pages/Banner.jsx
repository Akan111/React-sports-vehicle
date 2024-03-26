import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import "./banner.css";
import SlideBtn from "../components/SlideBtn";
import CircleBar from "../components/CircleBar";

function Banner() {
  const { data: cars, setData: setCars } = useContext(AppContext);

  const handleSlideChange = (ind) => {
    if (ind >= 4) {
      ind = -1;
    }

    const newCars = cars.map((car, index) => {
      car.active = false;

      if (index === ind + 1) {
        car.active = true;
      }

      return car;
    });

    console.log(newCars);
    setCars(newCars);
  };

  return (
    <div className="banner">
      {cars &&
        cars.length > 0 &&
        cars.slice(0, 5).map((car, index) => (
          <div
            key={car._id}
            className={`slide ${car.active ? "active" : undefined}`}
          >
            <div className="container-fluid">
              <div className="row banner-top">
                <div className="col-lg-4 p-0 banner-top-left">
                  <div className="banner-title">
                    <h1>Get Your Dream {car.make}</h1>
                    <span className="slide-number">0{car._id}</span>
                  </div>
                  <SlideBtn index={index} slideChange={handleSlideChange} />
                </div>
                <div className="col-lg-8 p-0 banner-top-right">
                  <div className="banner-img">
                    <img
                      src={car.bannerImg}
                      alt=""
                      className="img-fluid active"
                    />
                    <video
                      className="banner-video"
                      src={car.video}
                      autoPlay
                      loop
                      muted
                    ></video>
                    <div className="car-brief">
                      <div className="car-intro">
                        <CircleBar
                          name="Power"
                          number={car.power}
                          color="#f82249"
                        />
                        <CircleBar
                          name="Engine"
                          number={car.engine}
                          color="#fe5d26"
                        />
                        <CircleBar
                          name="New"
                          number={car.new}
                          color="#00df22"
                        />
                      </div>
                      <div className="car-nav"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row banner-bottom">
                <div className="col-lg-4 p-0"></div>
                <div className="col-lg-5 p-0"></div>
                <div className="col-lg-3 p-0"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Banner;
