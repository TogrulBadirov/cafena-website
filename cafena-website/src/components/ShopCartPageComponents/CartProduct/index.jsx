import React, { useContext, useRef, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import './index.scss';
import { BasketContext } from '../../../context/BasketContext';
const CartProduct = ({ productImg, productName, productPrice, productQuantity, subtotal, basketProduct }) => {
  const {removeBasket, updateCount} = useContext(BasketContext)
    return (
        <div id="cart_product">
            <div className='row d-flex align-items-center'>

                <div className='col-12 col-md-2 col-lg-2 py-md-4 ps-0'>
                    <div className='product_img'>
                        <img src={productImg} />
                    </div>
                </div>


                <h6 className='col-12 col-md-3 col-lg-3 product_name py-2 py-md-4 ps-0'>
                    <span>Product name: </span>
                    {productName}
                </h6>
                <p className='col-12 col-md-2  col-lg-2 product_price py-2 py-md-4 ps-0'>
                    <span>Product price: </span>
                    ${productPrice}
                </p>
                <p className='col-12  col-md-2 col-lg-2 product_quantity py-2 py-md-4 ps-0'>
                    <span>Product quantity: </span>
                    <input min="1" defaultValue={productQuantity} type="number"   onChange={(e)=>updateCount(basketProduct,e.target.value)} />
                </p>
                <p className='col-12  col-md-2 col-lg-2 subtotal py-2 py-md-4 ps-0'>
                    <span>Subtotal: </span>
                    ${subtotal}
                </p>
                <div className='remove_btn col-12 col-md-1 col-lg-1 pb-2 py-md-4 ps-0'>
                    <button onClick={()=>removeBasket(basketProduct)}><IoMdClose /></button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct