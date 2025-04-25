import React from "react";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>{`Copyright © GreenStreets ${year}`}</div>
      <div>
        <a href="/set-up">Set-Up</a>
      </div>
      <div>
        <a href="/timeline">RoadMap</a>
      </div>
      <div>
        <a href="/about-us">About</a>
      </div>
      <div>
        <a href="/faq">FAQ</a>
      </div>
      <div>
        <a href="/contact-us">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
