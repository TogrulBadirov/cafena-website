import React from 'react'
import { IoMdClose } from "react-icons/io";
import './index.scss'
const CartProduct = ({ productImg, productName, productPrice, productQuantity, subtotal }) => {
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
                    {productQuantity}
                </p>
                <p className='col-12  col-md-2 col-lg-2 subtotal py-2 py-md-4 ps-0'>
                    <span>Subtotal: </span>
                    ${subtotal}
                </p>
                <div className='remove_btn col-12 col-md-1 col-lg-1 pb-2 py-md-4 ps-0'>
                    <IoMdClose />
                </div>
            </div>
        </div>
    )
}

export default CartProduct