
import Header from './components/header';
import './App.css';
import TimeLineImage from './components/timelineImage';
import muppet from './images/muppet.webp'
import Footer from './components/footer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function App() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="ContentWrapper">
                <TimeLineImage />
            </div>
            <div className="timeline">
                <VerticalTimeline lineColor={ '#000' }>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #93DC5C' }}
                    date="July 2023"
                    contentStyle={{background: '#93DC5C'}}
                    iconStyle={{ background: '#93DC5C', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">GreenStreets was born</h3>
                    <p>
                    A young group of university students came together to tackle the rubbish problem
                    </p>
                    <img src={muppet} alt="Logo" className = 'Muppets'/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #93DC5C' }}
                    date="July 2023"
                    contentStyle={{background: '#93DC5C'}}
                    iconStyle={{ background: '#93DC5C', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">GreenStreets was born</h3>
                    <p>
                    A young group of university students came together to tackle the rubbish problem
                    </p>
                    <img src={muppet} alt="Logo" className = 'Muppets'/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #93DC5C' }}
                    date="July 2023"
                    contentStyle={{background: '#93DC5C'}}
                    iconStyle={{ background: '#93DC5C', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">GreenStreets was born</h3>
                    <p>
                    A young group of university students came together to tackle the rubbish problem
                    </p>
                    <img src={muppet} alt="Logo" className = 'Muppets'/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #93DC5C' }}
                    date="July 2023"
                    contentStyle={{background: '#93DC5C'}}
                    iconStyle={{ background: '#93DC5C', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">GreenStreets was born</h3>
                    <p>
                    A young group of university students came together to tackle the rubbish problem
                    </p>
                    <img src={muppet} alt="Logo" className = 'Muppets'/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #93DC5C' }}
                    date="July 2023"
                    contentStyle={{background: '#93DC5C'}}
                    iconStyle={{ background: '#93DC5C', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">GreenStreets was born</h3>
                    <p>
                    A young group of university students came together to tackle the rubbish problem
                    </p>
                    <img src={muppet} alt="Logo" className = 'Muppets'/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #93DC5C' }}
                    date="July 2023"
                    contentStyle={{background: '#93DC5C'}}
                    iconStyle={{ background: '#93DC5C', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">GreenStreets was born</h3>
                    <p>
                    A young group of university students came together to tackle the rubbish problem
                    </p>
                    <img src={muppet} alt="Logo" className = 'Muppets'/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #93DC5C' }}
                    date="July 2023"
                    contentStyle={{background: '#93DC5C'}}
                    iconStyle={{ background: '#93DC5C', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">GreenStreets was born</h3>
                    <p>
                    A young group of university students came together to tackle the rubbish problem
                    </p>
                    <img src={muppet} alt="Logo" className = 'Muppets'/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: '#93DC5C', color: '#fff' }}
                />
                </VerticalTimeline>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default App;