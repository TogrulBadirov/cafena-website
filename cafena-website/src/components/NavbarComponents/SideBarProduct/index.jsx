import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import './index.scss'
import { BasketContext } from '../../../context/BasketContext';
const SideBarProduct = ({productImg,productName,productPrice,product}) => {
  const {removeBasket}=useContext(BasketContext)
  return (
    <div id='side_bar_product'>
            <div className="side_bar_product_img">
              <img src={productImg} />
            </div>
            <div className='product_info'>
              <h6>
                <a className="side_bar_product_name" href="">
                  {productName}
                </a>
              </h6>
              <p className="side_bar_product_price">${productPrice}</p>
            </div>
            <div>
              <button className="product_remove_btn"  onClick={()=>removeBasket(product)}>
                <IoClose />
              </button>
            </div>
          
    </div>
  )
}

export default SideBarProduct