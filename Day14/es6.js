// For Loop using let
console.log("Getting started with ES6");
for (i = 1; i <= 5; i++) {
  // console.log(i)
}
// console.log(i)

const a = 78;
const b = 39;
const sum1 = a + b;
// console.log(`Addition of ${a} and ${b} is equal to ${sum1}`)

// Template literals
let x = 8;
x = 89;
let y = 9;
y = 2;
let sum = x + y;
// console.log(`Addition of ${x} and ${y} is equal to ${sum}`)

// Arrow function
const addition = (p, q) => p + q;

// console.log(addition(2,8))

// console.log('foosfsdfsd')
function myAdd(...args) {
  let sum = 0;
  args.forEach((val) => (sum += val));
  return sum;
}
// console.log(myAdd(5))
// console.log(myAdd(5,9,3))
// console.log(myAdd(5,9,4,4,5,5,6,6))

let arr = [1, 3, 4, 5, 6, 7, 7];
let newArr = [...arr, 9, 10];
// console.log(newArr)

let obj = {
  name: "yhhjab",
  sname: "bhbhsbh",
};
let newObj = {
  ...obj,
  name: "noman",
  city: "Mumbai",
};
// console.log(newObj)

const birds = [
  { Name: "Eurasian Collared-Dove", Type: "Dove", age: 89 },
  { Name: "Bald Eagle", Type: "Hawk", age: 12 },
  { Name: "Cooper's Hawk", Type: "Hawk", age: 12 },
];

// Filter Method in Modern Js
let agedB = birds.filter(({ age }) => age > 12);
// console.log(agedB)

// Map Method in Modern Js
const arrBirdName = birds.map((bird) => {
  bird.Name;
  // console.log(bird)
});
const arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumRe = arrA.reduce((res, item) => {
  // console.log(`${res}=====${item}`)
  return res + item;
}, 0);
// console.log(sumRe)
const arrr = [1, 3, 4, 5, 6, 7];
// function double(x){
//     return x*2
// }
const out = arrr.map((x) => x.toString());
// console.log(out)

const numm = function (num) {
  //   console.log(`${num} is this`);
  return num + num;
};
// console.log(numm(9));
// console.log(square(5)); // 25

// function square(n) {
//   return n * n;
// }

// It is called Function Expression
const square = function (n) {
  return n * n;
};
// console.log(square);

// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// console.log(materials.map((material) => material.length));
const summm = (a, b) => a + b + 100;
// console.log(summm(undefined, 9));d
// console.log(typeof summm);

const summm2 = (a, b) => a + b + 100;
// console.log(summm2(1, 9));
