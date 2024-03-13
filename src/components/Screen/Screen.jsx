import React from "react";
import style from './Screen.module.css'

const Screen = ({color, text, image}) => {
  return (
    <div className={style.screen}
      style={{
        backgroundColor: color
      }}
    >
      <img src={image} alt="" />
      <h1>{text}</h1>
    </div>
  );
};

export default Screen;
