import React from "react";
import logo from "../images/clean-street-japan.jpg";
function HomePageImage() {
  return (
    <div className="HomePageImageContainer">
      <img src={logo} alt="Logo" className="HomePageImage" />
      <div className="ImageCaption">
        <p className="ImageText">using AI to clean up our streets</p>
        <div className="findOutMore">
          <a href="/timeline">
            <p>find out more &rarr;</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePageImage;
