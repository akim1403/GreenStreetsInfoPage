import React from 'react'
import logo from '../images/greencity-transformed.png'
import settings from '../images/settings.webp'
function setUpImage() {
    return (
      <div className="HomePageImageContainer">
        <img src={logo} alt="Logo" className="SetUpImage" />
        <div className="SetUpImageCaption">
        <p className = "SetUpImageTitle">Set-Up Guide</p>
        <p className = "SetUpImageText">
            Get ready to embark on a journey towards cleaner streets and a greener environment. 
            Our AI-powered trash detection system relies on your car's camera to identify and map littered areas.
            Follow the steps below to seamlessly install the camera onto your vehicle. 
            With your contribution, we're turning every drive into a step towards a more sustainable future.
        </p>
        <img src={settings} alt="Logo" className="settings" />
        </div>
      </div>
    );
  }

export default setUpImage;