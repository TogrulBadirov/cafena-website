import React, { useContext } from "react";
import { FaShoppingBasket, FaRegEye } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import "./index.scss";
import { BasketContext } from "../../../context/BasketContext";
const SpecialMenuCard = ({ cardImg, cardName, currentPrice, prevPrice, product }) => {
  const {basket, addToBasket, IsProductInBasket} = useContext(BasketContext)
  return (
    <div className="col-12 col-lg-6 col-xl-4 card_margin">
      <div id="special_menu_card">
        <div className="menu_card">
          <div className="menu_card_img">
            <img src={cardImg} />
          </div>

          <div className="menu_card_content">
            <h4 className="card_name">
              <a href="">{cardName}</a>
            </h4>
            <div className="card_info">
              <p>price-</p>
              <div>
                <span className="price_current">${currentPrice}/</span>
              </div>
              <div>
                <span className="price_prev">${prevPrice}</span>
              </div>
            </div>

            <div className="menu_card_icons">
              <div className="card_icon">
                <button onClick={()=>addToBasket(product)}><FaShoppingBasket /></button>
              </div>
              <div className="card_icon">
                <IoMdHeartEmpty />
              </div>
              <div className="card_icon">
                <FaRegEye />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
