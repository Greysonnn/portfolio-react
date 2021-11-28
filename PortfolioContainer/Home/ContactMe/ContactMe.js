import React, {useState} from "react";
import Typical from "react-typical";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";
import './ContactMe.css'

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState("")

    const handleName = (e)=>{
        setName(e.target.value);
    };
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    };
    const handleMessage = (e)=>{
        setMessage(e.target.value);
    };
    

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets get in touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Get In Touch 📧",
                1500,

                "Hire Me 🤝",
                1500,

                "Contact Me 📧",
                1500,
              ]}
            />
          </h2>
          <a href="https://facebook.com">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://google.com">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://youtube.com">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className='back-form'>
            <div className='img-back'>
                <h4>Send Your Email Here!</h4>
                <img src={imgBack} alt='Image not found' />
            </div>
            <form>
                <p>{banner}</p>

                <label htmlFor='name' >Name</label>
                <input type='text' 
                onChange={handleName}
                value = {name}
                />
                
                <label htmlFor='email' >Email</label>
                <input type='email' 
                onChange={handleEmail}
                value = {email}
                />
                
                <label htmlFor='message' >Message</label>
                <textarea type='text' 
                onChange={handleMessage}
                value = {message}
                />

                <div className='send-btn'>
                    <button type='submit'>
                        Send <i className='fa fa-paper-plane'/>
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
