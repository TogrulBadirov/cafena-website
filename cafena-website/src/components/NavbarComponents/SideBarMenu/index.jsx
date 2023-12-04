import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useCommonContext } from "../../../context/CommonContext";
import "./index.scss";
import SideBarProduct from "../SideBarProduct";
import { BasketContext } from "../../../context/BasketContext";
import { useNavigate } from "react-router-dom";

const SideBarMenu = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useCommonContext();
  const { basket } = useContext(BasketContext);
  const nav = useNavigate();
  const goToShop = () => {
    nav("/shopCart");
  };
  return (
    <aside id="SideBarMenu" className={isSideBarOpen ? "open" : "closed"}>
      <div className="close_btn">
        <button onClick={() => setIsSideBarOpen(false)}>
          <IoClose />
        </button>
      </div>

      <div className="side_bar_content">
        <div className="cart_items_count">
          <p>
            CART ITEMS - <span>{basket.length}</span>
          </p>
        </div>
        {basket.length === 0 ? (
          <p className="empty_cart">Your cart is currently empty.</p>
        ) : (
          <>
            <div className="side_bar_products">
              {basket &&
                basket.map((product) => (
                  <SideBarProduct
                    key={product.id}
                    productImg={product.image.Image}
                    productName={product.title}
                    productPrice={
                      product.price * ((100 - product.discount) / 100)
                    }
                    product={product}
                  />
                ))}
            </div>

            <div className="side_bar_subtotal">
              <p>SUB TOTAL:</p>
              <p>$87.00</p>
            </div>
          </>
        )}

        <div className="side_bar_buttons">
          <button className="dark" onClick={goToShop}>
            <span>view cart</span>
          </button>
          <button className="light">
            <span>checkout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBarMenu;
