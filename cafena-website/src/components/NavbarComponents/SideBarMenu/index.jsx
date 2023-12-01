import React from "react";
import { IoClose } from "react-icons/io5";
import { useCommonContext } from "../../../context/CommonContext";
import "./index.scss";
const SideBarMenu = () => {

  const {isSideBarOpen,setIsSideBarOpen}=useCommonContext()

  return (
    <div id="SideBarMenu" className={isSideBarOpen ? "open" : "closed"}>
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

          <div className="side_bar_product">
            <div className="side_bar_product_img">
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-1.png" />
            </div>

            <div>
              <h6>
                <a className="side_bar_product_name" href="">
                  ROREM IPSUM DOLOR SIT AMET.
                </a>
              </h6>
              <p className="side_bar_product_price">$19.00</p>
            </div>

            <div>
              <button className="product_remove_btn">
                <IoClose />
              </button>
            </div>
          </div>

          <div className="side_bar_product">
            <div className="side_bar_product_img">
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-1.png" />
            </div>

            <div>
              <h6>
                <a className="side_bar_product_name" href="">
                  ROREM IPSUM DOLOR SIT AMET.
                </a>
              </h6>
              <p className="side_bar_product_price">$19.00</p>
            </div>

            <div>
              <button className="product_remove_btn">
                <IoClose />
              </button>
            </div>
          </div>

          <div className="side_bar_product">
            <div className="side_bar_product_img">
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-1.png" />
            </div>

            <div>
              <h6>
                <a className="side_bar_product_name" href="">
                  ROREM IPSUM DOLOR SIT AMET.
                </a>
              </h6>
              <p className="side_bar_product_price">$19.00</p>
            </div>

            <div>
              <button className="product_remove_btn">
                <IoClose />
              </button>
            </div>
          </div>


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
    </div>
  );
};

export default SideBarMenu;
