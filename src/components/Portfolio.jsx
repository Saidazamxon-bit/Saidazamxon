import React from 'react';
import styled from 'styled-components';
import css from "./Portfolio.module.css"
import doctor from "../asserts/doctor.jpg"
import port from "../asserts/port2.jpg"
import fusion from "../asserts/Saidfusion.jpg"
const Portfolio = () => {
  return (
    <div className={css.box}>
        <h3>My Recent Work</h3>
        <h1>Portfolio</h1>
        <div className={css.cardbox}>
        <StyledWrapper>
      <div className="card">
     
        <img  className="card-image" src={doctor} alt="" />
        <p className="card-title">Doctor</p>
       
       
        <button
  className={css.button}
  onClick={() =>
    window.location.href = "https://doctor-kuyazfyoy-saidazamxon-bits-projects.vercel.app"
  }
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>

  <div className={css.text}>
    Live Demo
  </div>
</button>


        <p className="footer">Written by <span className="by-name">Saidazamxon</span> on <span className="date">25/01/2025</span></p>
      </div>
    </StyledWrapper>  

    <StyledWrapper>
      <div className="card">
      <img  className="card-image" src={port} alt="" />
        <p className="card-title">Trafalgar</p>
       
       
        <button
  className={css.button}
  onClick={() =>
    window.location.href = "https://saidazamxon1i-com.vercel.app/"
  }
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>

  <div className={css.text}>
    Live Demo
  </div>
</button>

        <p className="footer">Written by <span className="by-name">Saidazamxon</span> on <span className="date">01/02/2025</span></p>
      </div>
    </StyledWrapper>  

    <StyledWrapper>
      <div className="card">
      <img  className="card-image" src={fusion} alt="" />
        <p className="card-title">SaidFusion</p>
       
       
        <button
  className={css.button}
  onClick={() =>
    window.location.href = "https://saidazamxon-bit.github.io/Said-Fusion/"
  }
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>

  <div className={css.text}>
    Live Demo
  </div>
</button>

        <p className="footer">Written by <span className="by-name">Saidazamxon</span> on <span className="date">12/02/2025</span></p>
      </div>
    </StyledWrapper>  
    </div>
    </div>
    
  );
}

const StyledWrapper = styled.div`
  .card {
    padding: 20px;
    width: 300px;
    min-height: 300px;
    border-radius: 20px;
    background: #2C2C6C;
    box-shadow: 5px 5px 8px #1b1b1b,
               -5px -5px 8px #272727;
    transition: 0.4s;
    margin-top: 40px;
    height: 330px;
  }

  .card:hover {
    translate: 0 -10px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: #b2eccf;
    margin: 15px 0 0 10px;
  }

  .card-image {
    min-height: 170px;
    background-color: #313131;
    border-radius: 15px;
    background: #313131;
    box-shadow: inset 5px 5px 3px #2f2f2f,
              inset -5px -5px 3px #333333;
              width:300px;
            
  }

  .card-body {
    margin: 13px 0 0 10px;
    color: rgb(184, 184, 184);
    font-size: 15px;
  }

  .footer {
    float: right;
    margin: 14px 0 0 18px;
    font-size: 13px;
    color: #b3b3b3;
  }

  .by-name {
    font-weight: 700;
  }`;

export default Portfolio;
