import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const materials = [
  { name: "laptop", price: 2324 },
  { name: "watch", price: 43242 },
  { name: "shoo", price: 325 },
];

function App() {
  return (
    <div className="APP">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count, setCount);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  );
}

export default App;
