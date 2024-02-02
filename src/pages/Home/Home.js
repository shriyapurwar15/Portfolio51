import React from 'react';
import "./Home.css";
import Typewriter from 'typewriter-effect';
import resume from '../../assets/docs/resume.pdf';
import { useTheme } from '../../context/ThemeContext';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Home = () => {
  const[theme,setTheme]=useTheme();
  // handle theme
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==='light' ? 'dark' : 'light'));
  };
  return (
    <>
    <div className="container-fluid home-container" id="home">
      <div className='theme-btn' onClick={handleTheme}>
            {theme === 'light' ? (<FaMoon size={30}/>) : (< FaSun size={30}/>)}
      </div>
      <div className='container home-content'>
      
      <Fade right>
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
       </Fade>
       {/* <Fade bottom> */}
       <div className='home-buttons'>
        <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=9555981552"
        rel="noreferrer"
        target="_blank"
        >Hire Me</a>
        <a className="btn btn-cv" href={resume} download="Shriya.pdf"> My Resume</a>
       </div>
       {/* </Fade> */}
      </div>
    </div>
    </>
  );
}

export default Home;
