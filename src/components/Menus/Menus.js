import React from 'react';
import './Menus.css'
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
      (<div className="navbar-profile-pic">
        <img src={image} alt="profile-pic"  />
      </div>
     
      ) : (<h1>Icons</h1>)
      }

{toggle ?
      (<div className="nav-items">
      <div className='nav-item'>
          <div className='nav-link' >
          <CiHome size={25}/>
          Home
          </div>
          <div className='nav-link'>
          <FcAbout size={25} />
          About
          </div>
          <div className='nav-link'>
          <FaPortrait size={25}/>
          Work Experience
          </div>
          <div className='nav-link'>
          <FcBiotech size={25}/>
          Tech Stack
          </div>
          <div className='nav-link'>
          <FaBookReader size={25} />
          Education
          </div>
          <div className='nav-link'>
          <GoProjectSymlink size={25} />
          Project
          </div>
          <div className='nav-link'>
          <FaUserLarge size={25}/>
         Testimonial
          </div>
          <div className='nav-link'>

          <MdContactMail size={25}/>
          Contact
          </div>
      </div>
    </div>
      ) : (<div className="nav-items">
      <div className='nav-item'>
          <div className='nav-link' >
          <CiHome title="Home" size={25} />
          
          </div>
          <div className='nav-link'>
          <FcAbout title="About" size={25}/>
       
          </div>
          <div className='nav-link'>
          <FaPortrait title=" Work " size={25} />
         
          </div>
          <div className='nav-link'>
          <FcBiotech  title="Tech " size={25}/>
          
          </div>
          <div className='nav-link'>
          <FaBookReader title="Education" size={25}/>
          
          </div>
          <div className='nav-link'>
          <GoProjectSymlink title="  Project" size={25}/>
        
          </div>
          <div className='nav-link'>
          <FaUserLarge title="Testimonial" size={25} />
        
          </div>
          <div className='nav-link'>

          <MdContactMail title="Contact" size={25}/>
          
          </div>
      </div>
    </div>)
      }
       
   </>
  );
}

export default Menus;
