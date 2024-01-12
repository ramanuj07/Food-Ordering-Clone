import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ resCategory }) => {
  const { title, itemCards } = resCategory;
  const [showItems, setShowItems] = useState(false);

  const clickHandler = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={clickHandler}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span className="">⬇️</span>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
