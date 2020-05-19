console.log("filter");

const people = [
  { id: 1, name: "Sharad" },
  { id: 2, name: "Anil" },
  { id: 3, name: "Mohan" },
  { id: 4, name: "Selvaraj" },
];

const filteredPeople = people.filter((person) => person.id !== 2);

console.log(people);
console.log(filteredPeople);
