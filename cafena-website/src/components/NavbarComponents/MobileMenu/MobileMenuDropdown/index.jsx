import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./index.scss";
const MobileMenuDropdown = ({ links, dropdownTitle }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 
  return (
    <li className="menu_item">
      <div className="d-flex justify-content-between align-items-center">
        <a className="nav_link">{dropdownTitle}</a>
        <button className="mobile_dropdown_button" onClick={handleDropdown}>
          {isDropdownOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      <div id="mobile_dropdown" className={`${isDropdownOpen ? "active" : ""}`}>
        <ul>
          {links.map((link, i) => (
            <li key={i} className="dropdown_items">
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default MobileMenuDropdown;
