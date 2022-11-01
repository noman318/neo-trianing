console.log('My Object')
// let objn= {
//     fname: 'Shaikh',
//     lname : 'Noman'
// }
// console.log(objn['fname'])

// Object using Function

function Person(fname, lname){
    this.fname = fname,
    this.lname = lname,
    this.getFname = function(){
        return this.fname+ " " + this.lname;
    }
}
let person = new Person('Noman', 'Shaikh')

// console.log(person.fname);
// console.log(person.lname)
// console.log(person.getFname())


// Prototype Functions.

let car = function(){
    this.speed= 50;
}
car.prototype.acc = function(){
    this.speed+=20;
}
car.prototype.cspeed = function(){
    // console.log('the speed is: '+ this.speed)
}
let obj = new car();
obj.cspeed();
obj.acc();
obj.cspeed();

// IIFE Immediate Invoked Function Expression
// let calci = (function(){
//     return{
//         add : function(a, b){
//             return(a+b)
//         },
//         sub : function(a, b){
//             return(a-b)
//         }
//     }
// })()
let calci = {  
        add : function(a, b){
            return(a+b)
        },
        sub : function(a, b){
            return(a-b)
        }   
}
console.log(calci.add(2,4))
console.log(calci.sub(9,4))
