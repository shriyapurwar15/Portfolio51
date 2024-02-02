import React from 'react';
// import { Spin } from 'your-spin-library'; // Import your spin library
import './Projects.css';
import storeImg from "./storeImg.jpg"
import adminImg from "./adminPortal.png"
import chatGpt from "./chatgpt.png"
import Spin from 'react-reveal/Spin';


const Projects = () => {
  return (
    <div className="container project" id="project">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center" style={{ fontFamily: "cursive", background: "#6F8FAF", marginRight: "0px", fontSize: "20px" }}>
        👉 Here are my top 3 recent projects with live links and source code
      </p>

      {/* card design */}
      <div className="row" id="ads">
        <Spin>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">Full stack</span>
              <img
                src={storeImg}
                alt="project1"
              />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">NextJs</span>
              <span className="card-detail-badge">MySQL</span>
              <span className="card-detail-badge">TailWind-Css</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h6 className="text-uppercase">
                  Alisa's Fashion
                </h6>
              </div>
              <a
                className="ad-btn"
                href="https://ecommerce-store-sand-alpha.vercel.app/"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">Full stack</span>
              <img
                src={adminImg}
                alt="project1"
              />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">NextJs</span>
              <span className="card-detail-badge">MySQL</span>
              <span className="card-detail-badge">TailWind-Css</span>
              <span className="card-detail-badge">ShadCn/Ui</span>
              <span className="card-detail-badge">Clerk</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h6 className="text-uppercase">
                  Ecommerce Admin Portal
                </h6>
              </div>
              <a
                className="ad-btn"
                href="https://e-commerce-admin-silk.vercel.app/"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">Full stack</span>
              <img
                src={chatGpt}
                alt="project1"
              />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">ReactJs</span>
              <span className="card-detail-badge">MongoDB</span>
              <span className="card-detail-badge">Material-Ui</span>
              <span className="card-detail-badge">OpenAi</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h6 className="text-uppercase">
                  AI - Chat App
                </h6>
              </div>
              <a
                className="ad-btn"
                href="https://chat-app-ai-s1i3.onrender.com/"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                View
              </a>
            </div>
          </div>
        </div>
        {/* Add similar card elements for other projects */}
        </Spin>
      </div>
      </div>
      
  );
}

export default Projects;
