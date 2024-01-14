import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 m-4 text-center">
      <h1 className="pb-4 font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-4 p-4 bg-gray-300 text-red-500 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your cart is Empty - Add items to your cart</h1>
        )}

        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
