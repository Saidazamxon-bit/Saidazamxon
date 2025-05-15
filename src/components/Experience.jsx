import React from 'react'
import css from "./Experience.module.css"
import styled from 'styled-components';

const Experience = () => {
 
  return (
    <div className={css.box1}>
    <h1 className={css.text1}>What Skills I Have</h1>
    <div className={css.wrapper}>
      <h1 className={css.h1}>Frontend Development</h1>
    <StyledWrapper>
      <div className={css.Qator}>

        <div className={css.Loder}>
      <div className="loader" />
      <p>React</p>
       </div>

       <div className={css.Loder}>
      <div className="loader" />
      <p>Tailwind</p>
       </div>

       <div className={css.Loder}>
      <div className="loader" />
      <p>React-redux
      </p>
       </div>

       <div className={css.Loder}>
      <div className="loader" />
      <p>Ajax</p>
       </div>

</div>

<div className={css.Qator}>

<div className={css.Loder}>
<div className="loader" />
<p>HTML</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>CSS</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>Bootstrap</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>Figma</p>
</div>

</div>

<div className={css.Qator}>

<div className={css.Loder}>
<div className="loader" />
<p>Axios</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>Ant design
</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>UiVerce</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>Flowbite</p>
</div>

</div>

<div className={css.Qator}>

<div className={css.Loder}>
<div className="loader" />
<p>Javascript</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>Git</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>Redux
</p>
</div>

<div className={css.Loder}>
<div className="loader" />
<p>Jquery</p>
</div>

</div>
    </StyledWrapper>
    </div>
    </div>

  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 2em;
    height: 2em;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    animation: spin 3s infinite;
    margin-right: 10px;
    
  }

  .loader::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  @keyframes spin {
    0% {
      transform: rotate(-45deg);
    }

    50% {
      transform: rotate(-360deg);
      border-radius: 50%;
    }

    100% {
      transform: rotate(-45deg);
    }
  }`;

export default Experience;
