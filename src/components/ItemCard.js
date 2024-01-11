import { RES_IMG_BASE_URL } from "../utils/constants";

const ItemCard = ({ card }) => {
  return (
    <div className="text-left my-6 flex justify-between border-b-2">
      <div className="w-9/12">
        <div className="py-2">
          <span className="font-semibold">{card.info.name}</span>
          <div>
            <span>
              ₹{" "}
              {card.info.price
                ? card.info.price / 100
                : card.info.defaultPrice / 100}
            </span>
          </div>
        </div>
        <p className="text-xs">{card.info.description}</p>
        <div className=" m-4"></div>
      </div>
      <div className="w-3/12 p-4">
        <img src={RES_IMG_BASE_URL + card.info.imageId} />
      </div>
    </div>
  );
};

export default ItemCard;
