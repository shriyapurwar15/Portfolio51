import React,{useState} from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from 'react-icons/bs';
import Swing from 'react-reveal/Swing';
import axios from "axios";

const Contact = () => {
        const[name,setName]=useState("");
        const[email,setEmail]=useState("");
        const[message,setMessage]=useState("");
        const[loading,setLoading]=useState(false);

        const handleSubmit=async()=>{
            setLoading(true);
            try {
                 const body={name,email,message};
                 const data=await axios.post("https://portfolio-2afe.onrender.com/api/v1/portfolio/sendEmail",body);
                 setLoading(false);
                 if(data)
                 {
                  alert("mail sent successfully");
                 }
            } 
            catch (error) {
                console.log(error);
                setLoading(false);
                return;
            }
        }
    return (
        <>
        
            <div className='contact' id="contact">
                <div className='card card0 border-0'>
                    <div className="row">
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='card1'>
                                <div className='row border-line'>
                                    <img src="https://userfiles-secure.educatorpages.com/userfiles/mrsdecksclassroom/contact%20me.jpg" alt="contact" 
                                    className='image'/>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                        <Swing>
                            <div className='row'>
                                <div className='card2 d-flex card border-0 px-4 py-5'>
                                    <div className='row'>
                                       <h6>Contact with 
                                       <FaLinkedin color="blue" size={36} className="ms-2"/>
                                       <BsGithub color="black" size={36} className="ms-2"/>
                                       </h6>
                                    </div>
                                  
                                </div>
                                <div className='row px-3'>
                                    <div className='line' />
                                    <small className='or text-center'>OR</small>
                                    <div className='line' />
                                </div>
                                <div className='row px-3'>
                                    <input type="text" name="name" placeholder='Write your Name' className='mb-3' onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div className='row px-3'>
                                    <input type="text" name="email" placeholder='Write your Email Address' className='mb-3' onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className='row px-3'>
                                    <textarea type="text" name="msg" placeholder='Write your message' className='mb-3' onChange={(e)=>setMessage(e.target.value)}/>
                                </div>
                                <div className='row px-3'>
                                    <button className="button" type="submit" disabled={loading} onClick={handleSubmit}>SEND MESSAGE</button>
                                </div>
                            </div>
                            </Swing>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
