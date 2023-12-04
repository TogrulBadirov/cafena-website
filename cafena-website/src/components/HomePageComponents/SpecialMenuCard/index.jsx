import React, { useContext } from "react";
import { FaRegEye, FaShoppingBasket } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { BasketContext } from "../../../context/BasketContext";
import { Link } from "react-router-dom";
import "./index.scss";
import { useWishListContext } from "../../../context/WishListContext";
const SpecialMenuCard = ({
  cardImg,
  cardName,
  currentPrice,
  prevPrice,
  product,
}) => {
  const { basket, addToBasket, IsProductInBasket } = useContext(BasketContext);
  const {addToWishList}=useWishListContext()
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
                <button onClick={() => addToBasket(product)}>
                  <FaShoppingBasket />
                </button>
              </div>
              <div className="card_icon">
                <button onClick={()=>addToWishList(product)}><IoMdHeartEmpty /></button>
              </div>
              <div className="card_icon">
                <Link to={`/${product.id}`}>
                  <button>
                    <FaRegEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
