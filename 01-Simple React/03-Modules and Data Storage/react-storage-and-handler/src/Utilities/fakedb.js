// use local storage to manage cart
const addToDb = (id) => {
  localStorage.setItem(id, 1);
};

export { addToDb };
