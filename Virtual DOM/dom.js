let array = [];
increment = 0;
let container = document.querySelector(".container");

// FAST

while (increment < 10000) {
  array.push(++increment);
}

container.innerHTML = array.join(" ");

// SLOW
// while (increment < 10000) {
//   increment++;
//   container.innerHTML += " " + increment;
// }
