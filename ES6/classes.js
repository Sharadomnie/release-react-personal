console.log("classes");

class Person {
  constructor(name, age) {
    console.log("called ");
    this.name = name;
    this.age = age;
    console.log();
  }

  greet() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

const person1 = new Person();
const person2 = new Person();

const person3 = new Person("Sharad", 30);
const person4 = new Person("Aarti", 27);

console.log(person3.age);
console.log(person4.greet());

//Subclasses

console.log("subclasses");

class Employee extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.EmployeeId = employeeId;
  }

  info() {
    console.log(
      `My name is ${this.name} and my employeeId is ${this.EmployeeId}`
    );
  }
}

const employee1 = new Employee("Sharad", 30, "G01125855");

console.log(employee1.name, employee1.EmployeeId);

console.log(employee1.info());
