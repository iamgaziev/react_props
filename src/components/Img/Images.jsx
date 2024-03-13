import React from "react";
import style from "./Img.module.css";

const Images = ({ arrImages, setClickedImg }) => {
  return (
    <div>
      <div className={style.flex}>
        {arrImages.map((image) => {
          return (
            <img
              src={image}
              onClick={(e) => setClickedImg(e.target.src)}
              className={style.pictures}
              alt="photo"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;
