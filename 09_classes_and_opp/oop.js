const user = {
    username: "andaz",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //output will be {}

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greating = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("andaz", 10, true)
const userTwo = new User("aarav", 12, false)

console.log(userOne);
console.log(userTwo);
