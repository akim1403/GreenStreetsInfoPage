import React from "react";
import logo from "../images/faqImage.jpg";
function AboutUsImage() {
  return (
    <div className="HomePageImageContainer">
      <img src={logo} alt="Logo" className="SetUpImage" />
      <div className="SetUpImageCaption">
        <p className="SetUpImageTitle">Contact Us</p>
        <p className="SetUpImageText">
          We're eager to connect with you. Whether you have questions, ideas, or
          just want to say hello, we're here. Reach out through the contact form
          or drop us an email. Let's make our streets cleaner and greener
          together.
        </p>
      </div>
    </div>
  );
}

export default AboutUsImage;
