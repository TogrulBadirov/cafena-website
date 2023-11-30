import React from "react";
import "./index.scss";
const Slide = ({ slideLogo, userReview, userImg, userName, userPosition }) => {
  return (
    <div id="Slider">
      <div className="slide_container">
        <div className="slide_icon">
          <img src={slideLogo} alt="" />
        </div>
        <p className="user_review">{userReview}</p>
        <div className="user_img">
          <img src={userImg} alt="" />
        </div>
        <h4 className="user_name">{userName}</h4>
        <p className="user_position">{userPosition}</p>
      </div>
    </div>
  );
};

export default Slide;
