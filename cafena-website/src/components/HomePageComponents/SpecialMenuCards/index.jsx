import React from "react";
import SpecialMenuCard from "../SpecialMenuCard";
import "./index.scss";
const SpecialMenuCards = () => {
  return (
    <div id="special_menu_cards">
      <div className="container">
        <div className="row">
          <SpecialMenuCard
            cardImg="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-1.jpeg"
            cardName="Americano Coffee"
            currentPrice="325.00"
            prevPrice="348"
          />

          <SpecialMenuCard
            cardImg="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-1.jpeg"
            cardName="Americano Coffee"
            currentPrice="325.00"
            prevPrice="348"
          />

          <SpecialMenuCard
            cardImg="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-1.jpeg"
            cardName="Americano Coffee"
            currentPrice="325.00"
            prevPrice="348"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialMenuCards;
