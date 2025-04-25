import React from 'react'
import logo from '../images/HomepageImage.jpeg'
import AI from '../images/Sustainable-AI-future.jpg'
import map from '../images/world-map-made-of-green.jpg'
function HomePageInfo() {
    return (
      <div>
        <div className="Mission">
            <div className = "MissionInfo">
              <div className = "MissionMain">
                <h2>Cleaning Up the World One Pixel at a Time</h2>
                <p className="topicText">At GreenStreets, our unwavering mission is to transform the global landscape, pixel by pixel, 
                    into a cleaner and more sustainable world. Harnessing the power of AI, we are dedicated to 
                    meticulously identifying and eradicating trash, ensuring that every virtual step forward translates 
                    into a tangible leap towards a greener planet.
                </p>
            </div>
            <img src = {logo} alt="Logo" className = "missionImage"/>
          </div>
        </div>
        <div className="Mission">
            <div className = "MissionInfo">
            <img src = {AI} alt="Logo" className = "missionImage"/>
            <div className = "MissionMainR">
                <h2>Harnessing AI for a Greener Tomorrow</h2>
                <p className="topicText">
                Discover the heartbeat of our operation at GreenStreets, where cutting-edge 
                AI technology merges seamlessly with ecological responsibility. Our approach revolves 
                around leveraging artificial intelligence to pinpoint trash hotspots, enabling us to take 
                strategic steps towards a more eco-friendly future.
                </p>
            </div>
          </div>
        </div>
        <div className="Mission">
            <div className = "MissionInfo">
              <div className = "MissionMain">
                <h2>Mapping the Way to a Greener Future</h2>
                <p className="topicText">
                  GreenStreets is all about utilizing AI to map and address trash accumulation with precision. 
                  Through rigorous data analysis, we're generating visual representations of litter distribution that 
                  guide our clean-up endeavors. By transforming data into actionable insights, we're taking significant strides 
                  towards creating a more sustainable and cleaner world for generations to come.
                </p>
            </div>
            <img src = {map} alt="Logo" className = "missionImage"/>
          </div>
        </div>
      </div>
    );
  }

export default HomePageInfo;