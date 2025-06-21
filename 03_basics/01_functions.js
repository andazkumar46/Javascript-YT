function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("A");
    console.log("Z");
}

// sayMyName()

function addTwoNumbers(number1, number2){ // here number1 and number2 is paramaeter
    console.log(number1 + number2);   
}
// addTwoNumbers(5, 8)  // here 5 and 8 are arguments
const result = addTwoNumbers(6, 5)
console.log("Result:",result);  // Result: undefined 


// function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2;
    // return result   
    // return number1 + number2;
// }
// const result2 = addTwoNumbers(3 , 5);
// console.log(`result is: ${result}`);

function loginUserMessage(username){
    if(username === undefined){                   // if(!username)
        console.log("Please Enter a username");
        return       
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("andaz"))


function calculateCartprice(...num1){
    return num1
}
// console.log(calculateCartprice(100, 200, 300));  // [ 100, 200, 300 ]

function calculateCartprice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartprice(100, 200, 300, 400, 500));  //  [ 300, 400, 500 ]

const user = {
    username: "andaz",
    price: 299
}

function handleObjects(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObjects(user)
handleObjects({           // second method to pass the object
    username: "Aarav",
    price: 199
})

const myNewArray = [100, 200, 400, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([100, 500, 600, 400]))  // second method

