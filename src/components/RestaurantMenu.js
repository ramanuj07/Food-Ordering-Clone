import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_RES_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const res = await fetch(SWIGGY_RES_MENU_API + resId);

      if (!res.ok) {
        throw new Error(
          `Error fetching menu data: ${res.status} - ${res.statusText}`
        );
      }

      const json = await res.json();

      setResInfo(json.data);
    } catch (error) {
      throw new Error(
        `Error fetching menu data: ${res.status} - ${res.statusText}`
      );
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="restaurant--menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" Rs. "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
