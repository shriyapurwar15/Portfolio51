import React from 'react';
// import { Spin } from 'your-spin-library'; // Import your spin library
import './Projects.css';

const Projects = () => {
  return (
    <div className="container project">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center" style={{ fontFamily: "cursive", background: "#6F8FAF", marginRight: "0px", fontSize: "20px" }}>
        👉 Here are my top 3 recent projects with live links and source code
      </p>

      {/* card design */}
      <div className="row" id="ads">
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">Full stack</span>
              <img
                src="https://your-image-source.com/project1-image.jpg"
                alt="project1"
              />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">React</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h6 className="text-uppercase">
                  Techinfoyt Shopping Website
                </h6>
              </div>
              <a
                className="ad-btn"
                href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                View
              </a>
            </div>
          </div>
        </div>
        {/* Add similar card elements for other projects */}
      </div>
    </div>
  );
}

export default Projects;
