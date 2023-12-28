import React from "react";
import ReactDOM from "react-dom/client";

// preparing a food ordering website like swiggy or zomato
// firstly a design needs to be made for the website
/** design -
 * HEADER -
 *      - LOGO
 *      - NAV ITEMS
 * BODY -
 *      - SEARCH
 *      - RESTAURANT-CONTAINER
 *             - RESTAURANT CARDS
 *                  - Image,
 *                  - Name, Star Rating, Cuisine, Delivery Time
 * FOOTER -
 *      - COPYRIGHT
 *      - LINKS
 *      - ADDRESS
 */

const resCard = {
  backgroundColor: "#f0f0f0",
};

const RestuarantCard = () => {
  return (
    <div className="restaurant--card" style={resCard}>
      <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/1e/1a/3a/pizza-hut.jpg" />
      <h2>Pizza Hut</h2>
      <p>5</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" />
        <button type="submit">Search</button>
      </div>

      <div className="restaurant--container">
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo--container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        />
      </div>

      <div className="nav--items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);
