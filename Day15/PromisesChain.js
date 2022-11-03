console.log("We_Just_Made_a_Promise");

const promise = new Promise((resolve, reject) => {
  //   let age = 12;
  setTimeout(() => {
    resolve(10);
  }, 3000);
});
promise
  .then((res) => {
    console.log(res);
    return res * 4;
  })
  .then((res) => {
    console.log(res);
    return res + 100;
  })
  // console.log(Promise);
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
