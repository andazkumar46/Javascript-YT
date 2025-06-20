// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Andaz",
    "full name": "Andaz Kumar",
    [mySym]: "mykey1",  // symbol
    age: 28,
    location: "New Delhi",
    email: "andaz@google.com",
    isLoggrdIn: false,
    lastLoginDays: ["Sunday", "Monday", "Saturday"]

}

// console.log(JsUser.email); //andaz@google.com
// console.log(JsUser["email"]); // andaz@google.com
// console.log(JsUser["full name"]); // Andaz Kumar
// console.log(JsUser[mySym]);  // mykey1
// console.log(typeof mySym);  // symbol


JsUser.email = "andaz@hotmail.com"
// Object.freeze(JsUser) // to use for unchaged 
// console.log(JsUser);
JsUser.email = "andaz@abc.com"

JsUser.age = 30
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");  
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





