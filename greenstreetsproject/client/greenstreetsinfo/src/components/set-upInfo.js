import React from "react";

//import map from '../images/world-map-made-of-green.jpg'
function SetUpInfo() {
  return (
    <div className="SetUpContainer">
      <div className="Mission">
        <div className="MissionInfo">
          <div className="MissionMain">
            <h2>1. Preparing for Installation</h2>
            <ul className="settingList">
              <li>
                Collect your camera unit, mounting brackets, cables, and any
                tools needed for installation
              </li>
              <li>
                Select a spot with a clear view of the road, minimal glare, and
                easy access to power. Avoid obstructions like wipers and
                mirrors.
              </li>
            </ul>
          </div>
          <iframe
            allowFullScreen
            title="Embedded youtube"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
      <div className="Mission">
        <div className="MissionInfo">
          <div className="MissionMain">
            <h2>2. Installing the Camera</h2>
            <ul className="settingList">
              <li>
                Clean and Prepare the Mounting Surface and Attach the Camera
                Unit
              </li>
              <li>Position and Angle the Camera</li>
              <li>Secure Cables and Wires</li>
              <li>Connect to Power Source</li>
            </ul>
          </div>
          <iframe
            allowFullScreen
            title="Embedded youtube"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
      <div className="Mission">
        <div className="MissionInfo">
          <div className="MissionMain">
            <h2>3. Testing and Finalizing</h2>
            <ul className="settingList">
              <li>
                Test the camera's functionality after installation. Adjust its
                angle if needed to ensure optimal performance
              </li>
              <li>
                If you encounter issues, refer to our troubleshooting tips to
                address common challenges during testing
              </li>
            </ul>
          </div>
          <iframe
            allowFullScreen
            title="Embedded youtube"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>

      <div className="Mission">
        <div className="MissionInfo">
          <div className="MissionMain">
            <h2>4. Safety and Support</h2>
            <ul className="settingList">
              <li>
                Keep safety a priority. Ensure the camera doesn't obstruct your
                view and won't distract you while driving
              </li>
              <li>
                Find answers to common questions in our{" "}
                <a href="/about">FAQs section</a> for quick solutions
              </li>
              <li>
                <a href="/about">Need help?</a> Reach out to our support team
                for any assistance during the installation process
              </li>
            </ul>
          </div>
          <iframe
            allowFullScreen
            title="Embedded youtube"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SetUpInfo;
