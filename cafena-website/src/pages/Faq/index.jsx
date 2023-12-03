import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import "./index.scss";
import Accardion from "./Accardion";
import faqData from './faqData'
const Faq = () => {
  const [selected,setSelected]=useState(0)
  const toggle=(i)=>{
    if (selected===i) {
      return setSelected(null)
    }
    setSelected(i)
  }
 
  return (
    <div id="faq_page">
      <div className="container">
        <div className="faq_wrapper">
       
        {
          faqData && faqData.map((item,i)=>(
            <div id="accardion" key={i}>
            <div className="accardion_icon">
              <button onClick={()=>toggle(i)} 
              className={`${selected===i ? 'button_active' : 'button_close'} accardion_btn`}>
                <FaArrowDown />
              </button>
            </div>
            <div className="accardion_content ">
              <div className="accardion_question"  >
                <button onClick={()=>toggle(i)}>
                <p>{item.question}</p>
                </button>
              </div>
              <div className={`${selected===i ? 'active' : ''} accardion_answer`}>
                <p>
                 {item.answer}
                </p>
              </div>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Faq;
