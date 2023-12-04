import React, { useContext } from "react";
import "./index.scss";
import CartProduct from "../../components/ShopCartPageComponents/CartProduct";
import { BasketContext } from "../../context/BasketContext";
import { useNavigate } from "react-router-dom";
const ShopCart = () => {
  const { basket, clearBasket, basketSubTotal, discountedPrice } =
    useContext(BasketContext);
  const nav = useNavigate();
  const goToShop = () => {
    nav("/shop");
  };
  return (
    <>
      <div id="shop_cart">
        <div className="container">
          {basket.length === 0 ? (
            <p className="empty_cart">
              Your cart is currently empty.
              <button className="go_to_shop" onClick={goToShop}>
                Continue shopping!
              </button>
            </p>
          ) : (
            <>
              <div className="shop_content">
                <div className="product_property">
                  <div className="cart_product_info">
                    <div className="row">
                      <h5 className="col-md-2 col-lg-2">PRODUCT IMAGE</h5>
                      <h5 className="col-md-3 col-lg-3">PRODUCT NAME</h5>
                      <h5 className="col-md-2 col-lg-2">PRICE</h5>
                      <h5 className="col-md-2 col-lg-2">QUANTITY</h5>
                      <h5 className="col-md-2 col-lg-2">SUBTOTAL</h5>
                      <h5 className="col-md-1 col-lg-1">REMOVE</h5>
                    </div>
                  </div>

                  {basket &&
                    basket.map((basketProduct) => (
                      <CartProduct
                        productImg={basketProduct.image.Image}
                        productName={basketProduct.title}
                        productPrice={
                          basketProduct.price *
                          ((100 - basketProduct.discount) / 100)
                        }
                        productQuantity={basketProduct.count}
                        subtotal={
                          Math.round(
                            (discountedPrice(basketProduct) + Number.EPSILON) *
                              100
                          ) / 100
                        }
                        basketProduct={basketProduct}
                      />
                    ))}
                </div>
              </div>

              <div className="cart_buttons_wrapper">
                <input type="text" placeholder="Coupon code" />
                <button>apply coupon</button>
                <button onClick={() => clearBasket()}>clear cart </button>
              </div>

              <div className="cart_total">
                <div className="cart_total_content">
                  <h3 className="cart_total_heading">Cart Total</h3>
                  <div className="sub_total">
                    <p>Sub Total</p>
                    <p>$ {basketSubTotal()}</p>
                  </div>
                  <div>
                    <button className="checkout_btn">
                      <span>PROCCED TO CHECKOUT</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopCart;
