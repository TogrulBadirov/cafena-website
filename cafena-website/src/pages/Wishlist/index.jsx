import React from "react";
import "./index.scss";
import WishlistProduct from "../../components/WishListPageComponents/WishlistProduct";
const Wishlist = () => {
  return (
    <div id="wishlist">
      <div className="container">
        <div className="shop_content">
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

            <WishlistProduct
              productImg="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-1.png"
              productName="ESPRESSO RISTRETTO"
              productPrice="130.00"
            />

            <WishlistProduct
              productImg="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-1.png"
              productName="ESPRESSO RISTRETTO"
              productPrice="130.00"
            />

            <WishlistProduct
              productImg="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-1.png"
              productName="ESPRESSO RISTRETTO"
              productPrice="130.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
