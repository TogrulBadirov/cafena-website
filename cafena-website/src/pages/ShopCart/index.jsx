import React from 'react'
import './index.scss'
import CartProduct from '../../components/ShopCartPageComponents/CartProduct';
const ShopCart = () => {
  return (
    <div id='shop_cart'>
      <div className='container'>
        <div className='shop_content'>
          <div className="product_property">

            <div className="cart_product_info">
              <div className="row">
                <h5 className='col-md-2 col-lg-2'>PRODUCT IMAGE</h5>
                <h5 className='col-md-3 col-lg-3'>PRODUCT NAME</h5>
                <h5 className='col-md-2 col-lg-2'>PRICE</h5>
                <h5 className='col-md-2 col-lg-2'>QUANTITY</h5>
                <h5 className='col-md-2 col-lg-2'>SUBTOTAL</h5>
                <h5 className='col-md-1 col-lg-1'>REMOVE</h5>
              </div>
            </div>

            <CartProduct
              productImg="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-1.png"
              productName="ESPRESSO RISTRETTO"
              productPrice="130.00"
              productQuantity="2"
              subtotal="130"
            />

            <CartProduct
              productImg="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-1.png"
              productName="ESPRESSO RISTRETTO"
              productPrice="130.00"
              productQuantity="2"
              subtotal="130"
            />

            <CartProduct
              productImg="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-1.png"
              productName="ESPRESSO RISTRETTO"
              productPrice="130.00"
              productQuantity="2"
              subtotal="130"
            />

          </div>
        </div>

        <div className='cart_buttons_wrapper'>
            <input type="text" placeholder='Coupon code' />
            <button>apply coupon</button>
            <button>clear cart </button>
            <button>update cart</button>
          </div>

         
      </div>
    </div>
  )
}

export default ShopCart