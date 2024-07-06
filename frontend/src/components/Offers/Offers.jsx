import React from "react";
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Comfort</h1>
                <h1>& Style</h1>
                <p>Warmth in Every Corner, Comfort in Every Moment</p>
                {/* <button>Check Now</button> */}
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="exclusive" />
            </div>
        </div>
    )
}

export default Offers