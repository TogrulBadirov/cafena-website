import React, { useContext } from 'react'
import "./index.scss"
import { FaRegEye, FaShoppingBasket } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { BasketContext } from '../../../context/BasketContext';
import { Link } from 'react-router-dom';
import ShopProductDetailModal from '../ShopProductDetailModal';

const ShopProduct = ({props,title,price,item}) => {
    const {basket, addToBasket, IsProductInBasket,discountedPrice} = useContext(BasketContext)
    const {view} = props
  return (
    <>
    
    <div className={`product col-lg-${view} col-12`}>

<div >

<div className="product-img">
   <img src={item.image.Image} alt="" />
</div>
<div className="product-content">
   <p className='category'>ROSTED COFFEE</p>
   <h5>{title}</h5>
   <div className="card_info">
         <p>price-</p>
         <div>
           <span className="price_current">${item.price*((100-item.discount)/100)}</span>
         </div>
         <div>
           <span className="price_prev">${price}</span>
         </div>
       </div>
   <div className="menu_card_icons">
         <div className="card_icon">
           <button onClick={()=>addToBasket(item)}><FaShoppingBasket /></button>
         </div>
         <div className="card_icon">
           <IoMdHeartEmpty />
         </div>
         <div className="card_icon">
             <Link to={`/shop/${item.id}`}> 
           <button> 
             <FaRegEye /> 
             </button>
             </Link> 
         </div>
</div>
</div>
</div>

</div>
    </>
  )
}

export default ShopProduct