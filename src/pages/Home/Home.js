import React from 'react';
import "./Home.css";
import Typewriter from 'typewriter-effect';
import resume from '../../assets/docs/resume.pdf';

const Home = () => {
  return (
    <>
    <div className="container-fluid home-container">
      <div className='container home-content'>
       <h2> Hi👋 I'm a </h2>
       <h1>
       <Typewriter
  options={{
    strings: ['Mern Stack Developer!'],
    autoStart: true,
    loop: true,
  }}
/>
       </h1>
       <div className='home-buttons'>
        <button className="btn btn-hire">Hire Me</button>
        <a className="btn btn-cv" href={resume} download="Shriya.pdf"> My Resume</a>
       </div>
      </div>
    </div>
    </>
  );
}

export default Home;
