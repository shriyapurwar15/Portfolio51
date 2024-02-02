import React from 'react'
import './Workexp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';


const Workexp = () => {
    return (
        <>
            <div className='work' id="work">
                <div className='container work-exp'>
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                      Work Experience
                    </h2>
                    <hr/>
                    <VerticalTimeline>
                    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'blue' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)',color:'black' }}
    date="May 2023 - July 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className="vertical-timeline-element-title">Front-end Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">BlackRhino</h4>
    <p>
      Made a BRSR form using React Application
    </p>
  </VerticalTimelineElement>  
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default Workexp


