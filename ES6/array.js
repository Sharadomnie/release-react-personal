//For each
const fruits = ["Apple", "Banana", "mango", "grapes"];

fruits.forEach((fruit, index) => {
  console.log(`${fruit} at ${index + 1}`);
});

//MAP

// const upperCaseFruits = fruits.map(
//   (fruit) => {
//     fruit.slice(0, -1).toUpperCase();
//   }
//   // slice the last letter.
// );

const upperCaseFruits = fruits.map(
  (fruit) => fruit.slice(0, -1).toUpperCase()

  // slice the last letter.
);
console.log(upperCaseFruits);
