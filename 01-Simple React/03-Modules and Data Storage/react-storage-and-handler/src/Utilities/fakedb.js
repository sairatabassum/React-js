// use local storage to manage cart
const addToDb = (id) => {
  let shoppingCart = {};

  //get the shopping cart from the local storage
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

  //   const quantity = localStorage.getItem(id);
  //   if (quantity) {
  //     console.log("Already exist");
  //     const newQuantity = Number(quantity) + 1;
  //     localStorage.setItem(id, newQuantity);
  //   } else {
  //     console.log("New item");
  //     localStorage.setItem(id, 1);
  //   }
};

const removeToDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

export { addToDb, removeToDb };
