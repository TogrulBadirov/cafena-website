import React from "react";
import "./index.scss";
import WishlistProduct from "../../components/WishListPageComponents/WishlistProduct";
import { useWishListContext } from "../../context/WishListContext";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { favItems } = useWishListContext();
  const nav = useNavigate();
  const goToShop = () => {
    nav("/shop");
  };
  return (
    <div id="wishlist">
      <div className="container">
        <div className="shop_content">
          {favItems.length === 0 ? (
            <p className="empty_wishlist">
              Your wishlist is currently empty.
              <button className="go_to_shop" onClick={goToShop}>Continue shopping!</button>
            </p>
          ) : (
            <div className="product_property">
              <div className="cart_product_info">
                <div className="row">
                  <h5 className="col-md-2 col-lg-2">PRODUCT IMAGE</h5>
                  <h5 className="col-md-3 col-lg-3">PRODUCT NAME</h5>
                  <h5 className="col-md-2 col-lg-2">PRICE</h5>
                  <h5 className="col-md-2 col-lg-2">STOCK STATUS</h5>
                  <h5 className="col-md-2 col-lg-2">ADDING CART</h5>
                  <h5 className="col-md-1 col-lg-1">REMOVE</h5>
                </div>
              </div>
              {favItems.map((item) => (
                <WishlistProduct
                  key={item.id}
                  productImg={item.image.Image}
                  productName={item.title}
                  productPrice={item.price * ((100 - item.discount) / 100)}
                  item={item}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Wishlist;
