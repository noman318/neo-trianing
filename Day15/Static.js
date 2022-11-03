console.log("MyStaticMethod");
class Person {
  constructor() {
    this.name = "Noman";
  }
  getName() {
    return this.name;
  }
  static details() {
    console.log("Static Method Called");
  }
}
Person.details();
const obj = new Person();
console.log(obj.getName());
