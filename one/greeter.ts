class Student {
  fullName: string;
  // 1.constructor构造函数中加public的属性相当于在Student类中加了个属性↓
  // 1.firstName: any;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
    // 1.this.firstName = firstName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  console.log("person", person);

  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
console.log(greeter(user));
