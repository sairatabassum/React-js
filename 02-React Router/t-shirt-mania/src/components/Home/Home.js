import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import useTShirts from "../../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";

const Home = () => {
  const [tshirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    // console.log(selectedItem);
    const exists = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Item already added");
    }
    console.log(cart);
  };

  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <TShirt
            handleAddToCart={handleAddToCart}
            key={tshirt._id}
            tShirt={tshirt}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
