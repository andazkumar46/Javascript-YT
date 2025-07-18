function multiplyBy5(num){
    return num * 5;
}
multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    console.log(this.score++);  // X
    // console.log(++this.score);  // X + 1
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
// chai.printMe()
chai.increment()

/*
Hear's what happen behind the scenes when the new keyword is uded:

A new object is created: the new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. this means that it has access to properties and method define on the constructor's prototype.

The constructor is called: The constructor function is called with the specifid argument and this is bound to the newly created object. if no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called. if it doesn't return a non-premitive value (object, array, function, etc.), the newly created object is returned.

*/