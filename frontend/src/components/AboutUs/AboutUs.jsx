import React from "react";
import "./AboutUs.css";
import aboutus from '../assets/aboutus.png'

const AboutUs = () => {
  return (
    <div className="aboutus">
      <img src={aboutus} alt="about us banner" />
      <h1>Our Story:</h1>
      <p>
        CozyCorner was born with a vision to design and create beautiful
        high-end bespoke furniture for the home and business. Creating luxurious
        furniture combined with an impeccable customer service throughout the
        process is at the heart of all we do.
      </p>
      <p>
        With many years of experience, our master craftsmen will create timeless
        luxury hand made furniture for you in our workshop based in Adana. We
        believe true luxury is not only the external aesthetics (which is
        obviously important), but it should also be at the core of all products.
        And that’s why, we only use the best materials sourced from reputable
        local suppliers. Ensuring our products are not only beautiful and
        luxurious on the outside but are also strong, durable and made to last.
      </p>
      <p>
        At CozyCorner we work using traditional methods combined with state of
        the art techniques and technology to bring your visions and dreams to
        life.
      </p>
      <p>
        Sohomanje luxury furniture showroom offers an exclusive collection of
        striking and inspiring pieces, creating a seamless dialogue between
        modern and vintage. It specializes in carefully selected mid-century
        modern & luxury furniture, with a wider offering of antiques,
        contemporary pieces and home accessories of exceptional design,
        craftsmanship and character.
      </p>
    </div>
  );
};

export default AboutUs;
