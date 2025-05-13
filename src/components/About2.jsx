import React from 'react';
import styled from 'styled-components';
import css from "../components/About.module.css";
import { FcGraduationCap } from "react-icons/fc";
import { IconName } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcTreeStructure } from "react-icons/fc";





const About2 = () => {
  return (
    <div className={css.box2}>
      
    <StyledWrapper>
      <div className="card">
        <div className="content">
        
          <p className="para">
          <FcGraduationCap className={css.icon} />
          </p>
          <h1 className={css.h1}> Experience</h1>
          <h5  className={css.h5}>5+ months</h5>
        </div >
      </div>

      <div className="card">
        <div className="content">
        

        <p className="para">
        <FcConferenceCall  className={css.icon}/>
          </p>
          <h1 className={css.Cl}> Clients</h1>
          <h5  className={css.Ww}>1+ Uzbeksitan</h5>
        </div>
      </div>

      <div className="card">
        <div className="content">
        <p className="para">
        <FcTreeStructure  className={css.icon}/>

          </p>
          <h1 className={css.Pr}>Projects</h1>
          <h5  className={css.pr}>2+ Completed</h5>
          <h5  className={css.pr2}>Projects</h5>
        </div>
      </div>
    </StyledWrapper>    
    <div className={css.AboutText}>
      <h1 className={css.AbText}>I am a Frontend programmer. I am fast and know my job well. I have been involved in many real projects. I am a javascript and React specialist. I have beautiful websites, are very responsive and can do any Frontend job</h1>
    </div>
    </div>
    
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;

    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    margin-top: 30px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
     width: 200px;
    padding: 36px;
    border-radius: 22px;
    color: #ffffff;
    overflow: hidden;
    background:rgb(37, 37, 90);
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    height: 130px;
  }

  .content::before {
    position: absolute;
    content: "";
    top: -4%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%);
    background: #ced8ff;
    z-index: -1;
    transform-origin: bottom;

    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content::after {
    position: absolute;
    content: "";
    top: -8%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%);
    background: #e7ecff;
    z-index: -2;
    transform-origin: bottom;
    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content svg {
    width: 48px;
    height: 48px;
  }

  .content .para {
    z-index: 1;
    opacity: 1;
    font-size: 18px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .link {
    z-index: 1;
    color: #fea000;
    text-decoration: none;
    font-family: inherit;
    font-size: 16px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .link:hover {
    text-decoration: underline;
  }

  .card:hover {
    transform: translate(0px, -16px);
  }

  .card:hover .content::before {
    rotate: -8deg;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .card:hover .content::after {
    rotate: 8deg;
    top: 0;
    width: 100%;
    height: 100%;
  }`;

export default About2;
