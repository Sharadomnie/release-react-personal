//CONST & LET
const myName = "Sharad";
//You cannot reassign the value to a const type variable. It will give error
//myName = "Sharad Saini";
console.log(myName);

const myPersonalDetails = {
  name: "Sharad Saini",
  age: 30,
};

myPersonalDetails.name = "Sharad"; //It is okay because we are manipulating a const type object we are not reinitializing it
console.log(myPersonalDetails);

// myPersonalDetails = { name: "Ajit", age: 29 };
// console.log(myPersonalDetails);

const arrayTypeSample = [1, 2, 3];
arrayTypeSample.push(4);
console.log(arrayTypeSample);

// arrayTypeSample = [1, 2, 3, 4]; //not allowed to reinitialize
// console.log(arrayTypeSample);

let myManagerName = "Pankaj";
myManagerName = "Pankaj Jasani";
console.log(myManagerName);
