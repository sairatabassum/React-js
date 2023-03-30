// use local storage to manage cart
const addToDb = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    console.log("Already exist");
    const newQuantity = Number(quantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    console.log("New item");
    localStorage.setItem(id, 1);
  }
};

export { addToDb };
