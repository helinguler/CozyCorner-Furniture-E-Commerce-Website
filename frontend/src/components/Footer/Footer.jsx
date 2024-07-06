import React from "react";
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pinterest_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="logo" />
                <p>CozyCorner</p>
            </div>
            <ul className="footer-links">
                <li>User Agreement</li>
                <li>Offices</li>
                <Link to='/aboutus'><li>About Us</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/faq'><li>SSS</li></Link>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="instagram icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="pinterest icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="whatsapp icon" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer