import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';
import { MdSchool } from 'react-icons/md';

const Education = () => {
  return (
      <>
     <div className="education" id="education">

     <h2 className="col-12 mt-3 mb-1 text-center text-uppercase text-aqua">
        Education Details
      </h2>
      <hr />
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color:'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2021-Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech </h3>
    <h4 className="vertical-timeline-element-subtitle">IIIT Ranchi</h4>
    <p>
       Pursuing B.Tech in Computer Science And Engineering Branch
    </p>
   
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2019-2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Class 12th </h3>
    <h4 className="vertical-timeline-element-subtitle">Pt. RCMMPS</h4>
    <p>Completed Class 12th from Pt. RCMMPS ,Prayagraj</p>
   
  </VerticalTimelineElement>
      </VerticalTimeline>
     </div>

      </>
  );
}

export default Education;
