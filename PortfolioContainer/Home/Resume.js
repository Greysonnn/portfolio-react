import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Resume.css';

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>
    )
    
  };

  const resumeBullets = [
    {label: "Education", logoSrc: "education.svg"},
    {label: "Work History", logoSrc: "work-history.svg"},
    {label: "Programming Skills", logoSrc: "programming-skills.svg"},
    {label: "Projects", logoSrc: "projects.svg"},
    {label: "Interests", logoSrc: "interests.svg"},
  ];

  const programmingSkillsDetails = [
    {skill: "JavaScript", ratingPercentage: 80},
    {skill: "React JS", ratingPercentage: 75},
    {skill: "Three JS", ratingPercentage: 60},
    {skill: "HTML", ratingPercentage: 90},
    {skill: "CSS", ratingPercentage: 85},
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: {fromDate: "2021", toDate: "2021"},
      description: "A personal portfolio website to showcase all my information in one place.",
      subHeading: "Technologies Used: React JS, Bootstrap, Node JS",
    },
    {
      title: "Personal Portfolio Website",
      duration: {fromDate: "2021", toDate: "2021"},
      description: "A personal portfolio website to showcase all my information in one place.",
      subHeading: "Technologies Used: React JS, Bootstrap, Node JS",
    },
    {
      title: "Personal Portfolio Website",
      duration: {fromDate: "2021", toDate: "2021"},
      description: "A personal portfolio website to showcase all my information in one place.",
      subHeading: "Technologies Used: React JS, Bootstrap, Node JS",
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading 
        heading={"Western Governors University"}
        subHeading={"BACHELOR OF SCIENCE COMPUTER SCIENCE"}
      />
      <ResumeHeading 
        heading={"CompTIA"}
        subHeading={"SECURITY+"}
      />
      <ResumeHeading 
        heading={"CompTIA"}
        subHeading={"NETWORK+"}
      />
    </div>,
    <div className='resume-screen-container' key='work-experience'>
      <ResumeHeading 
        heading={"Hospital Healthcare"}
        subHeading={"Security Analyst"}
        fromDate={"2020"}
        toDate={"Present"}
      />
      <div className='experience-description'>
          <span className='resume-description-text'>
            Currently working as a Security Analyst and learning fullstack development
          </span>
      </div>

      <div className='experience-description'>
        <span className='resume-description-text'>
          - Identity access management
        </span>
        <br/>
        <span className='experience-description'>
          - Endpoint management
        </span>
        <br/>
        <span className='experience-description'>
          - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
        </span>
      </div>,

      <div className='resume-screen-container programming-skills-container' key='programming-skills'>
        {programmingSkillsDetails.map((skill, index)=>(
          <div className='skill-parent' key={index}>
            <div className='heading-bullet'></div>
            <span>{skill.skill}</span>
            <div className='skill-percentage'>
              <div syle={{width: skill.ratingPercentage + "%"}}
              className='active-percentage'>

              </div>
            </div>
          </div>
        ))}
      </div>,

      <div className='resume-screen-container' key='projects'>
        {projectDetails.map((projectDetails, index)=>(
          <ResumeHeading 
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.fromDate}
          toDate={projectDetails.toDate}
          />
        ))}
      </div>,

      <div className='resume-screen-container' key='interests'>
          <ResumeHeading 
          heading='Music'
          description="Listening to soothing music is something i can never compromise with."
          />
          <ResumeHeading 
          heading='Economics'
          description="Studying macroeconomics as well as blockchain technology."
          />
          <ResumeHeading 
          heading='Gaming'
          description="Challenge the reflexes and reset the brain."
          />
      </div>
    </div>,
  ];

  const handleCarousal =(index)=>{
    let offsetHeight = 360;
    let newCarousalOffset ={
      style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"}
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = ()=>{
    return resumeBullets.map((bullet, index)=>(
      <div
      onClick={()=>handleCarousal(index)}
      className={index=== setSelectedBulletIndex ? "bullet selected-bullet" : "bullet"}
      key={index}
      >

        <img className='bullet-logo' 
        src={require (`../../assets/Resume/${bullet.logoSrc}`).default}
        alt='Oops, something went wrong'
        />
      </div>
    ))
  }

  const getResumeScreen =()=>{
    return (
      <div
      style ={carousalOffsetStyle.style}
      className='resume-details-carousal'
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    )
  }

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"My Professional Information"}
        />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
