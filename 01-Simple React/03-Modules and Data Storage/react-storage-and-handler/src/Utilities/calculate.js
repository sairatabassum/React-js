const add = (first, second) => {
  return first + second;
};

const multiply = (first, second) => first * second;

const numbers = [20, 24, 235, 65, 89];
const sumReducer = (prev, curr) => prev + curr;
const total = numbers.reduce(sumReducer, 0);

// const items = [
//   { id: 1, name: "alta", price: 100 },
//   { id: 1, name: "alta", price: 100 },
//   { id: 1, name: "alta", price: 100 },
//   { id: 1, name: "alta", price: 100 },
//   { id: 1, name: "alta", price: 100 },
// ];

// const itemSumReducer = (prev, curr) => prev + curr.price;
// const itemTotal = items.reduce(itemSumReducer, 0);

const getTotalPrice = (products) => {
  const reducer = (prev, curr) => prev + curr.price;
  const total = products.reduce(reducer, 0);
  return total;
};

// export default add; // for one things export
export { add, multiply, getTotalPrice as getTotal };
