// let myName = "Andaz    "
// let mychannel = "andazkumar06     "


// console.log(myNmae.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.andaz = function(){
    console.log(`andaz is present in all objects`);
    
}
Array.prototype.heyandaz = function(){
    console.log(`andaz says hello guyyys`);
    
}

// heroPower.andaz()  // andaz is present in all objects
// myHeros.andaz()  // andaz is present in all objects

// myHeros.heyandaz()  //  andaz says hello guyyys
// heroPower.heyandaz()  //  TypeError: heroPower.heyandaz is not a function


// Inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    iaAvailable: false
}
const TASupport = {
    makeAssignment: "JS Assignment",
    isFullTime: true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User

// modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher)

anotherUsername = "andazkumar123"


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);  
}

anotherUsername.trueLength()

"andaz".trueLength()
"coder".trueLength()