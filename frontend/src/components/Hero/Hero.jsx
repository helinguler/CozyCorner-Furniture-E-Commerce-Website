import React from "react";
import "./Hero.css";
import arrow_icon from '../assets/arrow.png'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-content">
          <h2>CozyCorner</h2>
          <div>
            <p>Turn Your House</p>
            <p>Into a Warm Home</p>
          </div>
          <Link to='/sofas' className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow icon" />
          </Link>
        </div>
    </div>
  );
};

export default Hero;