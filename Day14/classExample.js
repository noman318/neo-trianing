console.log('MyClasExample')

class Caar{
    constructor(){
        this.speed = 50;
    }
    acc(){
        this.speed += 20
    }
    checkSpeed(){
        console.log(`the Speed is ${this.checkSpeed}`)
    }
}
const obj = new Caar();
obj.checkSpeed()
obj.acc()
console.log(obj.checkSpeed())
