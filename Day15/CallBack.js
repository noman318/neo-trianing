console.log("MyCallBackFunction");

function greet(name, callBack) {
  console.log("Hi", name);
  callBack();
}
function callMe() {
  console.log("I am callBack");
}
greet("Shaikh Noman", callMe);
// setInterval(greet, 2000, "Shaikh Noman", callMe);
