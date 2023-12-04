import React, { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";
import { useContext } from "react";
import { BasketContext } from "../../../context/BasketContext";

const ProductDetailModal = ({ nav }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {addToBasket}=useContext(BasketContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!id) {
      navigate(nav);
    } else {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (!Object.keys(productDetail).length && !loading) {
      navigate(nav);
    }
  }, [loading]);

  return (
    <>
      {id
        ? productDetail && (
            <div
              className="ProductDetailModal"
              onClick={(e) => {
                navigate(nav);
              }}
            >
             <div className="container">
             <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="detail_modal"
              >
                <div className="modal_content">
                  <div className="row">
                   
                    <div className="left_side col-12 col-md-5">
                      {productDetail.image ? (
                        <img src={productDetail.image.Image} alt="" />
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="rigth_side col-12 col-md-7">
                      <button className="close_btn"  onClick={(e) => {
                navigate(nav);
              }}>X</button>
                      <h4>{productDetail.title}</h4>
                      <div>
                        {" "}
                        <p className="product_info">
                          Price : <span>${productDetail.price}</span>
                        </p>{" "}
                      </div>
                      <div>
                        <p className="product_info">
                          Aviable :
                          {productDetail.stock > 0 ? (
                            <span>In Stock</span>
                          ) : (
                            <span>out of Stock</span>
                          )}
                        </p>
                      </div>

                      <div>
                        <p className="product_desc">
                          {productDetail.description}
                        </p>
                      </div>

                      <div className="detail_process">
                      
                        <div>
                          <button className="detail_btn dark" onClick={()=>addToBasket(productDetail)}>
                            <span>add to cart</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="product_info">
                          Brand : <span>{productDetail.brand}</span>
                        </p>
                      </div>

                      <div>
                        <p className="product_info">
                          Sku : <span>{productDetail.sku}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             </div>
            </div>
          )
        : ""}
    </>

    //   <>
    //   {id
    //     ? productDetail && (
    //         <div
    //           className="ProductDetailModal"
    //           onClick={(e) => {
    //             navigate(nav);
    //           }}
    //         >
    //           <ul
    //             onClick={(e) => {
    //               e.preventDefault();
    //               e.stopPropagation();
    //             }}
    //           >
    //             <li>{productDetail.title}</li>
    //             <li>{productDetail.title}</li>
    //             <li>{productDetail.price}</li>
    //             <li>{productDetail.price}</li>
    //             <li>{productDetail.price}</li>
    //           </ul>
    //         </div>
    //       )
    //     : ""}
    // </>
  );
};

export default ProductDetailModal;
