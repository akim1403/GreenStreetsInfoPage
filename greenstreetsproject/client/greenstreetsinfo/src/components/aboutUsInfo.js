import React from 'react'
import kermit from '../images/kermit.jpg'
import piggy from '../images/piggy.jpg'
import beaker from '../images/beaker.jpg'
import bear from '../images/bear.webp'
import stick from '../images/stick.jpg'
import eagle from '../images/eagle.jpg'
//import map from '../images/world-map-made-of-green.jpg'
function AboutUsInfo() {
    return (
      <div className= "AboUsContainer">
        <p className = "MeetUs">Our Team</p>
        <div className = "AboutInfo">
            <div className = "idContainer">
                <img src={kermit} alt="Logo" className="IDphoto" />
                <h1>Kermit</h1>
                <p>Hello I am Kermit</p>
                <p>I am Green</p>
                <p>I like potato</p>
            </div>
            <div className = "idContainer">
                <img src={piggy} alt="Logo" className="IDphoto" />
                <h1>Piggy</h1>
                <p>Hello I am Piggy</p>
                <p>I am Green</p>
                <p>I like potato</p>
            </div>
            <div className = "idContainer">
                <img src={beaker} alt="Logo" className="IDphoto" />
                <h1>Beaker</h1>
                <p>Hello I am Beaker</p>
                <p>I am Green</p>
                <p>I like potato</p>
            </div>
        </div>
        <div className = "AboutInfo">
            <div className = "idContainer">
                <img src={bear} alt="Logo" className="IDphoto" />
                <h1>Bear</h1>
                <p>Hello I am Bear</p>
                <p>I am Green</p>
                <p>I like potato</p>
            </div>
            <div className = "idContainer">
                <img src={stick} alt="Logo" className="IDphoto" />
                <h1>Stick</h1>
                <p>Hello I am Stick</p>
                <p>I am Green</p>
                <p>I like potato</p>
            </div>
            <div className = "idContainer">
                <img src={eagle} alt="Logo" className="IDphoto" />
                <h1>Eagle</h1>
                <p>Hello I am Eagle</p>
                <p>I am Green</p>
                <p>I like potato</p>
            </div>
        </div>
      </div>
    );
  }

export default AboutUsInfo;