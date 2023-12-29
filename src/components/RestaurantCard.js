import { RES_IMG_BASE_URL } from "../utils/constants";

const resCard = {
  backgroundColor: "#f0f0f0",
};

const RestuarantCard = (props) => {
  // array destructuring is done here
  const { resData } = props;
  const { info } = resData;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = info;
  return (
    <div className="restaurant--card" style={resCard}>
      <img src={RES_IMG_BASE_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export { RestuarantCard };
