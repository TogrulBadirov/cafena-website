import React from "react";
import SpecialMenuCard from "../SpecialMenuCard";
import "./index.scss";
import useFetch from "../../../hooks/UseFetch";
const SpecialMenuCards = ({filteredProductData}) => {
  const { data, loading } = useFetch("http://localhost:3000/products")
  return (
    <div id="special_menu_cards">
      <div className="container">
        <div className="row">
          {filteredProductData && filteredProductData.map((product)=>(
            <SpecialMenuCard
            key={product.id}
              cardImg={product.image.thumbnail}
              cardName={product.title}
              currentPrice={product.price*((100-product.discount)/100)}
              prevPrice={product.price}
              product={product}
            />

          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenuCards;
