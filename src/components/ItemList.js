import React from "react";
import ItemCard from "./ItemCard";
const ItemList = ({ items }) => {
  return (
    <div>
      <span>
        {items.map((item) =>
          item.itemCards.map((card) => (
            <ItemCard key={card.card.id} card={card.card} />
          ))
        )}
      </span>
    </div>
  );
};

export default ItemList;
