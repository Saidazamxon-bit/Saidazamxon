import React from 'react';
import styled from 'styled-components';
import img from "../asserts/man.jpg"

const MeImg = () => {
  return (
    <StyledWrapper>
      <div className="container">
        
        <div className="card_box">
        <img className='img' src={img} alt="" />
          <span />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

  }

  .img{
  width:100%;
  height:100%;
  border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.27);
  

  }

  .card_box {
    width: 400px;
    height: 250px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.83);
    cursor: pointer;
    transition: all .3s;
    margin:auto;

  }

  .card_box:hover {
    transform: scale(0.9);
  }

  .card_box span {
    position: absolute;
    overflow: hidden;
    width: 150px;
    height: 150px;
    top: -10px;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box span::before {
    content: 'Premium';
    position: absolute;
    width: 150%;
    height: 40px;
    background-image: linear-gradient(45deg, #ff6547 0%, #ffb144  51%, #ff7053  100%);
    transform: rotate(-45deg) translateY(-20px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0,0,0,0.23);
  }

  .card_box span::after {
    content: '';
    position: absolute;
    width: 10px;
    bottom: 0;
    left: 0;
    height: 10px;
    z-index: -1;
    box-shadow: 140px -140px #cc3f47;
    background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  }
    

@media (max-width: 768px) {
   .card_box {
    width: 350px;
    height: 230px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.83);
    cursor: pointer;
    transition: all .3s;
    margin:auto;

  }
  }`;




export default MeImg;