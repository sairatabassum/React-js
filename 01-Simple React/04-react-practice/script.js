const db = {};

const addToDb = (item) => {
  // Three ways to add a property to an object
  // db.alom=1;
  // db['alom']=1;
  // db[item] = 1;

  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }
  console.log(db);
};
