console.log("Spread Testing");

const arrayOfNumbers = [1, 2, 3];
console.log(arrayOfNumbers);

const arrayOfMoreNumbers = [1, 2, 3, 4];
console.log(arrayOfMoreNumbers);

const arrayInsideArray = [arrayOfMoreNumbers, 5];
console.log(arrayInsideArray);

const arrayWithSpreadOperator = [...arrayOfMoreNumbers, 5];
console.log(arrayWithSpreadOperator);

const arrayWithSpreadAndFilter = [
  ...arrayOfMoreNumbers.filter((id) => id !== 2),
];
console.log(`arrayWithSpreadAndFilter  ${arrayWithSpreadAndFilter}`);

const sampleObjectOfPerson = { id: 1, name: "Sharad Saini" };

console.log(sampleObjectOfPerson);

const sampleObjectWithOtherDetails = {
  ...sampleObjectOfPerson,
  email: "sharad@barclays.com",
};

console.log(sampleObjectWithOtherDetails);
