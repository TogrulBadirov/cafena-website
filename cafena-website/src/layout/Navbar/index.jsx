import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import "./index.scss";
import Dropdown from "../../components/NavbarComponents/Dropdown";

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className="container">
        <div className="nav_content">
          <div className="nav_left">
            <div className="nav_logo pe-3">
              <NavLink to={"/"}>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png" alt="" />
              </NavLink>
            </div>
            <ul className="nav_left_links">
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

                <Dropdown className="subMenu" />

              </li>
              <li className="nav_item">
                <NavLink to={"/contact"}>contact</NavLink>
              </li>
            </ul>

          </div>

          <ul className="nav_right">
            <li className=" search nav_item_icon">
              <IoSearchSharp className="nav_item_icon" />
            </li>
            <li className="bars nav_item_icon">
              <FaBars/>
            </li>
            <li className="basket_icon nav_item_icon">
              <FaShoppingBasket/>
              <span className="basket_counter">0</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar