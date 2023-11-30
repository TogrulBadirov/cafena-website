import React from "react";
import useFetch from "../../../hooks/UseFetch";
import SectionHeading from "../../CommonComponents/SectionHeading";
import SpecialMenuCards from "../SpecialMenuCards";
import "./index.scss";
const SpecialMenuSection = () => {
  const { data }=useFetch('http://localhost:3000/category')
  return (
    <div id="special_menu">
      <div className="container">
        <SectionHeading
          heading_title="CAFENA POPULAR MENU"
          heading_sub_title="SPECIAL MENU"
        />

        <div className="special_menu_content">
            <div className="menu_buttons">
              <button>all</button>
              {
                data && data.map(item=>(
                  <button>{item.categoryName}</button>
                ))
              }
            </div>

            
            <SpecialMenuCards/>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenuSection;
