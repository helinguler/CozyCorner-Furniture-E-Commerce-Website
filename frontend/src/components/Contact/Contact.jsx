import React from "react";
import "./Contact.css";
import contactimg from '../assets/contact.png'

const Contact = () => {
  return (
    <div className="contact">
      <img src={contactimg} alt="contact banner" />
      <div className="contact-itemfield">
        <h1>Contact Us</h1>
        <hr />
        <div className="contact-row">
          <p className="bold-paragraph">Info:</p>
          <p>info@cozycorner.com</p>
        </div>
        <div className="contact-row">
          <p className="bold-paragraph">Press:</p>
          <p>press@cozycorner.com</p>
        </div>
        <div className="contact-row">
          <p className="bold-paragraph">Address:</p>
          <p>2000 Evler, Dr. Sadık Ahmet Blv. No:16B, 01200 Seyhan / Adana</p>
        </div>
        <div className="contact-row">
          <p className="bold-paragraph">Phone:</p>
          <p>+90 999 999 99 99 (9:00-18:30 arası ulaşabilirsiniz.)</p>
        </div>
        <div className="contact-row">
          <p className="bold-paragraph">Fax:</p>
          <p>+90 999 999 99 99</p>
        </div>
        <h3>Fill in Your Information Below</h3>
        <div className="conctact-withus">
          <div className="contact-row">
            <p className="bold-paragraph">Name:</p>
            <input type="text" placeholder="your name" />
          </div>
          <div className="contact-row">
            <p className="bold-paragraph">Email:</p>
            <input type="email" placeholder="email addres" />
          </div>
          <div className="contact-row">
            <p className="bold-paragraph">Phone:</p>
            <input type="text" placeholder="telephone number" />
          </div>

          <div className="contact-row">
            <p className="bold-paragraph">Message:</p>
            <input type="email" placeholder="your message" />
          </div>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Contact;
