import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
          {/* left */}
          <div className="flexColStart hero-left">
            <div className="orange-circle" />
            <div className="hero-title">
              <h1>
                Discover <br />
                Most Suitable <br /> Property
              </h1>
            </div>
            <div className="flexColStart hero-des">
              <span>
                Find a varity of properties that suites you very easilty
              </span>
              <span>
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue) size={25}" />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
            <div className="flexColStart start">
              <span>
                <CountUp start={88000} end={9000} duration={4}/><span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart start">
              <span>
                <CountUp start={88000} end={2000} duration={4}/><span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColStart start">
              <span>
                <CountUp end={28}/><span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
            </div>
            
          </div>
          {/* right */}
          <div className="flexCenter hero-left">
            <div className="image-container">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Hero;
