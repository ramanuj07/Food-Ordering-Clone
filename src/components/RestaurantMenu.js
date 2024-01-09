import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="my-12 p-4 border border-solid mx-auto max-w-[24rem] rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-600 mb-4">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <ul>
        {itemCards.map((item) => {
          return (
            <li
              key={item?.card?.info?.id}
              className="flex justify-between items-center border-b border-gray-300 py-2"
            >
              <span className="text-lg">{item?.card?.info?.name}</span>
              <span className="text-lg font-bold">
                Rs.{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}{" "}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
