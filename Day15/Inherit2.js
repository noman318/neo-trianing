class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log(`Walking on ${this.legs} legs`);
  }
}
class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("Bird's flying");
  }
}
const bird = new Bird(2);
bird.walk();
bird.fly();
// obj.bca();
