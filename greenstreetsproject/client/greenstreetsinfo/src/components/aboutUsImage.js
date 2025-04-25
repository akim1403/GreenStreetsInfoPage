import React from 'react'
import logo from '../images/aboutimage.jpg'
function AboutUsImage() {
    return (
      <div className="HomePageImageContainer">
        <img src={logo} alt="Logo" className="aboutUsImage" />
        <div className="SetUpImageCaption">
        <p className = "SetUpImageTitle">About Us</p>
        <p className = "SetUpImageText">
            Welcome to our About Us page, where you'll get a glimpse into our mission to create a cleaner world through innovative 
            AI-driven solutions. We're dedicated to harnessing technology to combat environmental challenges, 
            using AI to map and address trash accumulation. Our diverse and passionate team brings together expertise from various fields, 
            united by a shared vision for a greener planet. Get to know the faces behind our journey as we work hand-in-hand towards 
            a sustainable future.
        </p>
        </div>
      </div>
    );
  }

export default AboutUsImage;