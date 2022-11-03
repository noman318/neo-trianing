class A {
  abc() {
    return "Noman";
  }
}
class b extends A {
  bca() {
    let x = "Shaikh ";
    let y = super.abc();
    console.log("Full Name is ", x + y);
  }
}
const obj = new b();
obj.bca();
