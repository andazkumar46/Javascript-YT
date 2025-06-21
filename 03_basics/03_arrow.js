const user = {
    username: "andaz",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} empty object


// function chai(){
//     username = "andaz"
//     console.log(this);
    
// }
// chai()

// const chai = function () {
//     username = "andaz"
//     console.log(this.username);
    
// }
// chai()

// ++++++++++++++++++++ Arrow Function +++++++++++++++++++++

// const chai =  () => {
//     username = "andaz"
//     console.log(this);   //  {}
//     console.log(this.username); //undefined
    
// }
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//  emplicit return
// const addTwo = (num1 , num2) =>  num1 + num2  // here asume auto return
// const addTwo = (num1 , num2) =>  (num1 + num2)

// const addTwo = (num1 , num2) =>  {username: "andaz"}  // undefined
const addTwo = (num1 , num2) =>  ({username: "andaz"})  // { username: 'andaz' }
console.log(addTwo(3, 4));  // 7
