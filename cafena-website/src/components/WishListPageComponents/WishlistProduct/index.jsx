import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import "./index.scss";
import { BasketContext } from "../../../context/BasketContext";
import { useWishListContext } from "../../../context/WishListContext";

const WishlistProduct = ({ productImg, productName, productPrice ,item}) => {
  const { addToBasket } = useContext(BasketContext);
  const {removeFromWishList,isProductInStock}=useWishListContext()

  return (
    <div>
      <div id="wishlist_product">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-2 col-lg-2 py-md-4 ps-0">
            <div className="product_img">
              <img src={productImg} />
            </div>
          </div>

          <h6 className="col-12 col-md-3 col-lg-3 product_name text-uppercase py-2 py-md-4 ps-0">
            <span>Product name: </span>
            {productName}
          </h6>
          <p className="col-12 col-md-2  col-lg-2 product_price py-2 py-md-4 ps-0">
            <span>Product price: </span>${productPrice}
          </p>
          <p className="col-12  col-md-2 col-lg-2  py-2 py-md-4 ps-0 text-uppercase  ">
            <p className="stock_status">
                {
                    isProductInStock(item) ? <i className=" text-success">in stock</i> : <i className="text-danger">out of stock</i>
                    // console.log(isProductInStock(item) )
                }
            </p>
          </p>
          <p className="col-12  col-md-2 col-lg-2 subtotal py-2 py-md-4 ps-0">
            <button className="add_btn" onClick={() => addToBasket(item)}>Add to Cart</button>
          </p>
          <div className="remove_btn col-12 col-md-1 col-lg-1 pb-2 py-md-4 ps-0">
            <button onClick={()=>removeFromWishList(item)}>
                 <IoMdClose />
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistProduct;
