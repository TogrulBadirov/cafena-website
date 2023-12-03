import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import './index.scss'
const Accardion = ({selected,toggle,question,answer}) => {
    
  return (
    <div id="accardion">
            <div className="accardion_icon">
              <button onClick={()=>toggle(i)}><FaArrowDown /></button>
            </div>
            <div className="accardion_content ">
              <div className="accardion_question">
                <button>
                <p>{question}</p>
                </button>
              </div>
              <div className={`${selected ? 'active' : ''} accardion_answer`}>
                <p>
                 {answer}
                </p>
              </div>
            </div>
          </div>
  )
}

export default Accardion