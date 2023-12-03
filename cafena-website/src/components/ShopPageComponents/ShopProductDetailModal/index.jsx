import React, { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";

const ShopProductDetailModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      finally {
        setLoading(false);
      }
    };

    if (!id) {
        navigate("/shop");
      } else {
        fetchData();
      }
  }, [id]);

  useEffect(() => {
    if (!Object.keys(productDetail).length && !loading) {
      navigate("/shop");
    }
  }, [loading]);

  return (
    <>
      {id
        ? productDetail && (
            <div
              className="ProductDetailModal"
              onClick={(e) => {
                navigate("/shop");
              }}
            >
              <ul
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <li>{productDetail.title}</li>
                <li>{productDetail.price}</li>
                <li>{productDetail.price}</li>
                <li>{productDetail.price}</li>
              </ul>
            </div>
          )
        : ""}
    </>
  );
};

export default ShopProductDetailModal;
