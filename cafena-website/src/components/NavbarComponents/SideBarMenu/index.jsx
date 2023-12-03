import React from "react";
import { IoClose } from "react-icons/io5";
import { useCommonContext } from "../../../context/CommonContext";
import "./index.scss";
import SideBarProduct from "../SideBarProduct";
const SideBarMenu = () => {

  const {isSideBarOpen,setIsSideBarOpen}=useCommonContext()

  return (
    
    <aside id="SideBarMenu" className={isSideBarOpen ? "open" : "closed"}>

      <div className="close_btn">
        <button onClick={()=>setIsSideBarOpen(false)}>
         <IoClose />
        </button>
      </div>

      <div className="side_bar_content">
        <div className="cart_items_count">
          <p>
            CART ITEMS - <span>4</span>
          </p>
        </div>

        <div className="side_bar_products">
         <SideBarProduct/>
         <SideBarProduct/>
         <SideBarProduct/>
         <SideBarProduct/>
         <SideBarProduct/>
         <SideBarProduct/>
         <SideBarProduct/>
         <SideBarProduct/>
         <SideBarProduct/>
        </div>

        <div className="side_bar_subtotal">
          <p>SUB TOTAL:</p>
          <p>$87.00</p>
        </div>

        <div className="side_bar_buttons">
          <button>view cart</button>
          <button>checkout</button>
        </div>

      </div>
    </aside>
  );
};

export default SideBarMenu;
