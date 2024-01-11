import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    <div className="text-center my-12 p-4 border border-solid rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-600 mb-4">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* Categories accordian needs to be built here */}
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.title}
          resCategory={category.card.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
