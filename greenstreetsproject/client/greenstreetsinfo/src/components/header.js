import React from "react";
import logo from "../images/GreenStreetsLogo.png";
function Header() {
  return (
    <nav className="App-header">
      <a href="/">
        <img src={logo} alt="Logo" className="Logo" />
      </a>
      <div className="Menu-bar">
        <div className="menu-item">
          <a href="/set-up">Set-Up</a>
        </div>
        <div className="menu-item">
          <a href="/timeline">RoadMap</a>
        </div>
        <div className="menu-item">
          <a href="/about-us">About</a>
        </div>
        <div className="menu-item">
          <a href="/faq">FAQ</a>
        </div>
        <div className="menu-item">
          <a href="/contact-us">Contact</a>
        </div>
        <div className="language-switch">
          <a href="/about-us" className="EN">
            EN
          </a>
          <p>|</p>
          <a href="/about-us" className="CN">
            CN
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
