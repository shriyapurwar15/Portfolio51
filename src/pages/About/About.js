import React from 'react';
import image2 from './image2.jpg';

const About = () => {
    return (
        <>
            <div className="about" style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
                <div className='row'>
                    <div className='col-md-6 about-img' >
                        Image
                        <img src={image2} alt="profile-pic" style={{ marginLeft: "300px", height: "350px" }} />
                    </div>
                    <div className='col-md-6 about-content' >

                        <h1 style={{ marginLeft: "150px",color:"blue",fontFamily:"cursive" }}>About Me</h1>
                        <p style={{ marginRight: "100px",textAlign:"justify",padding:"20px" }}>
                            As a MERN (MongoDB, Express.js, React, Node.js) Stack Developer, I specialize in building robust and dynamic web applications. With a strong foundation in both front-end and back-end technologies, I excel in creating seamless user experiences. My proficiency in MongoDB ensures efficient data management, while Express.js and Node.js empower me to develop scalable and high-performance server-side applications. On the client side, I leverage the power of React to design interactive and responsive user interfaces. Through my diverse skill set, I contribute to the full development lifecycle, from conceptualization to deployment, ensuring the delivery of cutting-edge solutions that meet the needs of modern web applications.Explore my portfolio to witness the fusion of my technical expertise and creativity in crafting innovative and user-centric software solutions.

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
