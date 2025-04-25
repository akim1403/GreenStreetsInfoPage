import React from "react";
import emailcheck from "../images/emailcheck.png";
function MessageSuccess() {
  return (
    <div className="successContainer">
      <div className="messageSuccess">
        <img src={emailcheck} alt="Logo" className="emailimage" />
        <p>Your message has been sent successfully</p>
        <br></br>
        <p>We will get back to you within 2 business days</p>
      </div>

      <div className="submitAgain">
        <a href="/contact-us">Send us another message</a>
      </div>
    </div>
  );
}

export default MessageSuccess;
