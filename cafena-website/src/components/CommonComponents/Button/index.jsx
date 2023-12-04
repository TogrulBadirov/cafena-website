import React from "react";
import './index.scss'
const Button = ({ btnText, className }) => {
  return (
    <>
      <button className={`${className} btn_hero`}>
        <span>{btnText}</span>
      </button>
    </>
  );
};

export default Button;
