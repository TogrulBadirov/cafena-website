import React from "react";
import "./index.scss";
import { FaArrowDown } from "react-icons/fa6";
const Faq = () => {
  return (
    <div id="faq_page">
      <div className="container">
        <div className="faq_wrapper">
          <div className="faq_title">
            <div className="faq_icon">
              <FaArrowDown />
            </div>
            <div className="faq_question">
                <p>How does this work?</p>
            </div>
          </div>
          <div className="faq_content">
            <p>
                Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
