import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { FaShoppingBasket } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import "./index.scss";
import Dropdown from "../../components/NavbarComponents/Dropdown";
import SideBarMenu from "../../components/NavbarComponents/SideBarMenu";
import { useCommonContext } from "../../context/CommonContext";
import MobileMenu from "../../components/NavbarComponents/MobileMenu";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { setIsSideBarOpen, setIsMobileMenuOpen } = useCommonContext();

  const firstDropdownItems = [
    { name: 'Shop', to: '/shop' },
    { name: "Shop Detail", to: "/shopDetail" },
    { name: "Shop Cart", to: "/shopCart" },
    { name: "shop checkout", to: "/shopCheckout" },
  ];
  const secondDropdownItems = [
    { name: "Blog", to: "/blog" },
    { name: "Blog Detail", to: "/blogDetail" },
    { name: "Chefs", to: "/chefs" },
    { name: "Menu", to: "/menu" },
    { name: "Story", to: "/story" },
    { name: "Gallery", to: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const isScrollingUp = currentScrollPos > prevScrollPos;

      setIsSticky(currentScrollPos > 300 && isScrollingUp);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <nav id="navbar" className={isSticky ? 'header-sticky' : ''}>
      <div className="container">
        <div className="nav_content">
          <div className="nav_left">
            <div className="nav_logo pe-3">
              <NavLink to={"/"}>
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png"
                  alt=""
                />
              </NavLink>
            </div>
            <ul className="nav_left_links">
              <li className="nav_item">
                <NavLink to={"/"} className="nav_link">
                  home
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to={"/about"} className="nav_link">
                  about
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to={"/faq"} className="nav_link">
                  FAQ
                </NavLink>
              </li>

              <li className="nav_item">
                <a className="nav_link">pages</a>
                <Dropdown links={secondDropdownItems} className="subMenu" />
              </li>

              <li className="nav_item">
                <NavLink to={"/shop"} className="nav_link">
                  shop
                </NavLink>

                <Dropdown links={firstDropdownItems} className="subMenu" />
              </li>
              <li className="nav_item">
                <NavLink to={"/contact"} className="nav_link">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>

          <ul className="nav_right">
            <li className=" search nav_item_icon">
              <button>
                <IoSearchSharp />
              </button>
            </li>

            <li className="heart nav_item_icon">
              <NavLink to={"/wishlist"}>
                <button>
                  <BsHeart />
                  <span className="wishlist_counter">0</span>
                </button>
              </NavLink>
            </li>
            <li className="basket_icon nav_item_icon">
              <button onClick={() => setIsSideBarOpen(true)}>
                <FaShoppingBasket />
                <span className="basket_counter">0</span>
              </button>
            </li>
            <li className="bars nav_item_icon">
              <button onClick={() => setIsMobileMenuOpen(true)}>
                <HiBars3 />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <SideBarMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
