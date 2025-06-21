var c = 300;
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER :",a);
    
}

// console.log(a);  // a is not defined
// console.log(b);  // b is not defined
// console.log(c); // 30 because var is global scope variable
// console.log(a);

function one(){
    const username = "andaz"

    function two(){
        const website = "youtube"
        console.log(username);       
    }
    // console.log(website);  //  ReferenceError: website is not defined
    
    // two()
}
one()

if (true) {
    const username = "andaz"
    if (username === "andaz"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);   //ReferenceError: website is not defined
    
}
// console.log(username);  // ReferenceError: website is not defined





// +++++++++++++++++  Interesting  ++++++++++++++
console.log(addOne(5))

function addOne(num){
    return num +1
}



// console.log(addTwo(5))  // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))