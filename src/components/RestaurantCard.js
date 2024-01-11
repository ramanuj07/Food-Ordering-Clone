import { RES_IMG_BASE_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  // array destructuring is done here
  const { resData } = props;
  const { info } = resData;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = info;
  return (
    <div className="m-4 p-4 w-64 h-[25rem] bg-[#f0f0f0] hover:bg-gray-200 rounded-lg">
      <img
        src={RES_IMG_BASE_URL + cloudinaryImageId}
        className="rounded-lg w-full h-40 transform transition-transform duration-300 hover:scale-110"
      />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars 🌟</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// HOC
export const withPromotedLabel = (RestuarantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
