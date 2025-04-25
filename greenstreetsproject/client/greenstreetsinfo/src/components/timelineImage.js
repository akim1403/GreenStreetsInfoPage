import React from "react";
import logo from "../images/roadMapBackground.jpg";
function TimeLineImage() {
  return (
    <div className="HomePageImageContainer">
      <img src={logo} alt="Logo" className="SetUpImage" />
      <div className="SetUpImageCaption">
        <p className="SetUpImageTitle">RoadMap</p>
        <p className="SetUpImageText">
          Welcome to our Roadmap section, where we unveil our journey towards a
          cleaner and more sustainable world. Here, you'll find a roadmap that
          outlines our upcoming milestones, innovations, and initiatives. Join
          us as we navigate towards a greener future, one step at a time.
        </p>
      </div>
    </div>
  );
}

export default TimeLineImage;
