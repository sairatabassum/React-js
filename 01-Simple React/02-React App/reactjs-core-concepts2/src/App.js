import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="APP">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

// Set state method
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

// API call useEffect
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>ExternalUsers</h1>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

// Props Display array of object
function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  );
}

export default App;
