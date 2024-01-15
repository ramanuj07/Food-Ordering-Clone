import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-200 shadow-md">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold">{loggedInUser}</li>
          <li className="px-4 hover:text-red-500 font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
        </ul>
      </div>

      <div className="m-4 p-4 bg-blue-200 rounded-lg">
        <button
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
