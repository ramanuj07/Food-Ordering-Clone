import { RestuarantCard } from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" />
        <button type="submit">Search</button>
      </div>

      <div className="restaurant--container">
        {resList.map((restaurant) => (
          <RestuarantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
