import React from 'react';
import './Menus.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import { Link } from 'react-scroll';
import image from './image.jpg'
import { CiHome } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { FaPortrait } from "react-icons/fa";
import { FcBiotech } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { FaUserLarge } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

const Menus = ({toggle}) => {
  return (
   <>
     
      {toggle ?
      (<>
      <Zoom>
      <div className="navbar-profile-pic">
        <img src={image} alt="profile-pic"  />
      </div>
      </Zoom>
     
      </>
      ) : (<h1>Icons</h1>)
      }

{toggle ?

       (<Fade left>
      <div className="nav-items">
      <div className='nav-item'>
          <div className='nav-link' >
            <Link 
            to="home" spy={true} smooth={true} offset={-100} duration={100}>
           <CiHome size={25}/>
            Home
          </Link>
          </div>
          <div className='nav-link'>
            <Link  to="about" spy={true} smooth={true} offset={-100} duration={100}>
          <FcAbout size={25} />
          About
          </Link>
          </div>
          <div className='nav-link'>
          <Link 
            to="education" spy={true} smooth={true} offset={-100} duration={100}>
          <FaBookReader size={25} />
          Education
          </Link>
          </div>

        
          <div className='nav-link'>
          <Link 
            to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
          <FcBiotech size={25}/>
          Tech Stack
          </Link>
          </div>
          
          <div className='nav-link'>
          <Link 
            to="project" spy={true} smooth={true} offset={-100} duration={100}>
          <GoProjectSymlink size={25} />
          Project
          </Link>
          </div>

          <div className='nav-link'>
          <Link 
            to="work" spy={true} smooth={true} offset={-100} duration={100}>
          
          <FaPortrait size={25}/>
          Work Experience
          </Link>
          </div>
          
          <div className='nav-link'>
          <Link 
            to="contact" spy={true} smooth={true} offset={-100} duration={100}>
          <MdContactMail size={25}/>
          Contact
          </Link>
          </div>
      </div>
    </div>
    </Fade>
      ) : (<div className="nav-items">
      <div className='nav-item'>
          <div className='nav-link' >
          <Link 
            to="home" spy={true} smooth={true} offset={-100} duration={100}>
           <CiHome size={25}/>
            
          </Link>
          
          </div>
          <div className='nav-link'>
          <Link  to="about" spy={true} smooth={true} offset={-100} duration={100}>
          <FcAbout size={25} />
        
          </Link>
       
          </div>
          <div className='nav-link'>
          <Link 
            to="education" spy={true} smooth={true} offset={-100} duration={100}>
          <FaBookReader size={25} />
         
          </Link>
          
          </div>

          
          <div className='nav-link'>
          <Link 
            to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
          <FcBiotech size={25}/>
          
          </Link>
          
          </div>
         
          <div className='nav-link'>
          <Link 
            to="project" spy={true} smooth={true} offset={-100} duration={100}>
          <GoProjectSymlink size={25} />
       
          </Link>
        
          </div>
          <div className='nav-link'>
          <Link 
            to="work" spy={true} smooth={true} offset={-100} duration={100}>
          
          <FaPortrait size={25}/>
          
          </Link>
         
          </div>
          
          <div className='nav-link'>

          <Link 
            to="contact" spy={true} smooth={true} offset={-100} duration={100}>
          <MdContactMail size={25}/>
          
          </Link>
          
          </div>
      </div>
    </div>)
      }
       
   </>
  );
}

export default Menus;
