import logo from "./logo.svg";
import "./App.css";

const materials = [
  { name: "laptop", price: 2324 },
  { name: "watch", price: 43242 },
  { name: "shoo", price: 325 },
];

function App() {
  return (
    <div className="APP">
      {/* <Product name="laptop" price="24555"></Product>
      <Product name="watch" price="434762"></Product> */}

      {materials.map((material) => (
        <Product name={material.name} price={material.price}></Product>
      ))}
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
