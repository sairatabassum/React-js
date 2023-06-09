import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Conditional rendering options
  // 1. Element variable
  // 2. Ternary operator condition ? true : false
  // 3. && Operator (shorthand)
  // 4. ||

  let command;
  if (cart.length === 0) {
    command = <p>Please add at least one day</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item</small>
      </p>
    );
  }
  return (
    <div>
      <h2>Items Selected: {cart.length}</h2>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {cart.length === 0 || <p className="orange">You are buying</p>}
      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3>
        </div>
      )}
      {command}

      {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
    </div>
  );
};

export default Cart;
