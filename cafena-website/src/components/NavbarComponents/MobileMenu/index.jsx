import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./index.scss";
import { useCommonContext } from "../../../context/CommonContext";
import { NavLink } from "react-router-dom";
import MobileMenuDropdown from "./MobileMenuDropdown";

const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useCommonContext();
  const firstDropdownItems = [
    { name: "Shop", to: "/shop" },
    { name: "Shop Detail", to: "/shopDetail" },
    { name: "Shop Cart", to: "/shopCart" },
    { name: "shop checkout", to: "/shopCheckout" },
  ];
  const secondDropdownItems = [
    { name: "Blog", to: "/blog" },
    { name: "Blog Detail", to: "/blogDetail" },
    { name: "Chefs", to: "/chefs" },
    { name: "FAQ", to: "/faq" },
    { name: "Story", to: "/story" },
    { name: "Gallery", to: "/gallery" },
  ];
  return (
    <aside id="mobile_menu" className={isMobileMenuOpen ? "open" : "closed"}>
      <div className="mobile_menu_content">
        <div className="mobile_menu_heading d-flex justify-content-between align-items-center">
          <div className="mobil_menu_logo">
            <img
              src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png"
              alt=""
            />
          </div>
          <button
            className="mobile_menu_close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <IoClose />
          </button>
        </div>

        <ul className="mobil_menu_links">
          <li className="menu_item">
            <NavLink to={"/"} className="nav_link">
              home
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to={"/about"} className="nav_link">
              about
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to={"/menu"} className="nav_link">
              menu
            </NavLink>
          </li>

          <MobileMenuDropdown
            links={secondDropdownItems}
            dropdownTitle="pages"
          />
          <MobileMenuDropdown 
          links={firstDropdownItems} 
          dropdownTitle="shop" />

          <li className="menu_item">
            <NavLink to={"/reservation"} className="nav_link">
            Reservation
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MobileMenu;
