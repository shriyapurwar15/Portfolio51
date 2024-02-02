import React, { useState } from 'react'
import './MobileNav.css'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';
import image4 from './image4.jpg'
import { CiHome } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { FaPortrait } from "react-icons/fa";
import { FcBiotech } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { FaUserLarge } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // handle open
  const handleOpen = () => {
    setOpen(!open)
  }

  // handle menu clicks

  const handleMenuClick = () =>{
    setOpen(false);
  };
  return (
    <>
      <div className='mobile-nav'>
        <div className='mobile-nav-header'>
          {open ? (<IoMenu size={30} />) : (<AiOutlineDoubleLeft size={30} onClick={handleOpen} />)}
          <IoMdMenu size={30} onClick={handleOpen} />
          <span className='mobile-nav-title'>My Portfolio app</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className='nav-item'>
                <div className='nav-link' >
                  <Link
                    to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <CiHome size={25} />
                    Home
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcAbout size={25} />
                    About
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link
                    to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FaBookReader size={25} />
                    Education
                  </Link>
                </div>


                <div className='nav-link'>
                  <Link
                    to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcBiotech size={25} />
                    Tech Stack
                  </Link>
                </div>

                <div className='nav-link'>
                  <Link
                    to="project" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <GoProjectSymlink size={25} />
                    Project
                  </Link>
                </div>

                <div className='nav-link'>
                  <Link
                    to="work" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>

                    <FaPortrait size={25} />
                    Work Experience
                  </Link>
                </div>

                <div className='nav-link'>
                  <Link
                    to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <MdContactMail size={25} />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </>
  )
}

export default MobileNav
