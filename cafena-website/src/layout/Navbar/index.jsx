import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import "./index.scss";
import Dropdown from "../../components/NavbarComponents/Dropdown";

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className="container">
        <div className="nav_content">
          <ul className="nav_left">
            <li className="nav_item">
              <NavLink to={"/"}>home</NavLink>
            </li>
            <li className="nav_item">
              <NavLink to={"/about"}>about</NavLink>
            </li>
            <li className="nav_item">
              <NavLink to={"/pages"}>pages</NavLink>
            </li>
            <li className="nav_item">
            <NavLink to={"/shop"}>shop</NavLink>
              <Dropdown/>
              
            </li>
            <li className="nav_item">
              <NavLink to={"/contact"}>contact</NavLink>
            </li>
          </ul>

          <ul className="nav_right">
            <li  className="nav_item search">
              <IoIosSearch className="nav_item_icon" />
            </li>
            <li className="nav_item bars">
              <FaBars className="nav_item_icon" />
            </li>
            <li className="nav_item basket_icon">
              <FaShoppingBasket className="nav_item_icon"/>
              <span className="basket_counter">0</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar