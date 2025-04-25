import React from "react";
import logo from "../images/faqImage.jpg";
import settings from "../images/question.png";
function FAQImage() {
  return (
    <div className="HomePageImageContainer">
      <img src={logo} alt="Logo" className="SetUpImage" />
      <div className="SetUpImageCaption">
        <p className="SetUpImageTitle">Frequently Asked Questions</p>
        <p className="SetUpImageText">
          Have Questions About Our Innovative AI-Powered Street Cleaning
          Solution? Explore Our FAQ Section for Answers!
        </p>
        <img src={settings} alt="Logo" className="settings" />
      </div>
    </div>
  );
}

export default FAQImage;
