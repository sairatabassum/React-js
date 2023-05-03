import React from "react";
import Card from "../Card/Card";
const CardGroup = () => {
  const products = [
    { id: 1, name: "Laptop Pro", price: 12500 },
    { id: 2, name: "Laptop Cro", price: 32500 },
    { id: 3, name: "Laptop Gro", price: 52500 },
  ];
  return (
    <div>
      <h2>This is my CardGroup</h2>
      <div className="card-group" style={{ display: "flex" }}>
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
