import ItemList from "./ItemList";

const RestaurantCategory = ({ resCategory }) => {
  console.log(resCategory);
  const { title, categories } = resCategory;

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {title} ({categories.length})
        </span>
        <span className="">⬇️</span>
      </div>
      <ItemList items={categories} />
    </div>
  );
};

export default RestaurantCategory;
