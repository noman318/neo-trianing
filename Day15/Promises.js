console.log("We_Just_Made_a_Promise");

const promise = new Promise((resolve, reject) => {
  let age = 12;
  setTimeout(() => {
    if (age >= 18) {
      resolve("accepted");
    } else {
      reject("You are Rejcted");
    }
  }, 3000);
});
// console.log(Promise);
promise.then((res) => console.log(res)).catch((err) => console.log(err));
