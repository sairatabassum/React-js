let db = {};

const addToDb = (item) => {
  // Three ways to add a property to an object
  // db.alom=1;
  // db['alom']=1;
  // db[item] = 1;

  const storedTracker = localStorage.getItem("checka-tracker");
  if (storedTracker) {
    // STRING TO OBJECT
    db = JSON.parse(storedTracker);
  }

  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }

  localStorage.setItem("checka-tracker", JSON.stringify(db));

  console.log(db);
};

const removeItem = (item) => {
  const storedTracker = localStorage.getItem("checka-tracker");
  if (storedTracker) {
    const storedObject = JSON.parse(storedTracker);
    delete storedObject[item];
    localStorage.setItem("checka-tracker", JSON.stringify(storedObject));
  }
};
