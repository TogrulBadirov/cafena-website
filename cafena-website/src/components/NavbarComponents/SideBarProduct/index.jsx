import React from 'react'
import { IoClose } from "react-icons/io5";
import './index.scss'
const SideBarProduct = () => {
  return (
    <div id='side_bar_product'>
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
  )
}

export default SideBarProduct