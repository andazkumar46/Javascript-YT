//+++++++++++++ METHOD 1 to create promise++++++++++++++++++
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log('async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    // console.log("promise consumed");
    
})

//+++++++++++++ METHOD 2 to create promise++++++++++++++++++
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('Async task 2 is completed');
        resolve()
    }, 1000)
}).then(function(){
    // console.log("promise 2 consumed");
    
})

//+++++++++++++ METHOD 3 to create promise++++++++++++++++++
const promisThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "andaz", email:"andaz@google.com"})
    }, 1000)
})

promisThree.then(function(user){
    // console.log(user);
    
})

//+++++++++++++ METHOD 4 to create promise++++++++++++++++++
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "andaz", password: "1234"})
        } else{
            reject('Error: somthing went wrong')
        }
    }, 1000)
})

promiseFour.then((user) =>{
    // console.log(user);
    return user.username
}).then((username) =>{
    // console.log(username);
}).catch((error) =>{
    // console.log(error);   
})
// .finally(() => console.log('the promise either resolve or rejected'))


//+++++++++++++ METHOD 5 to create promise++++++++++++++++++
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "JavaScript", password: "1234"})
        } else{
            reject('Error: JS went wrong')
        }
    }, 1000)
});
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        // console.log(response);
        
    } catch (error) {
        // console.log(error); 
    }
}
consumePromiseFive()

//+++++++++++++ API by using async and await Method 1 +++++++++++++++++

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/andazkumar46')
        const data = await response.json()
        // console.log(data);
        
    } catch (error) {
        // console.log("E:", error);
        
    }
}
getAllUsers()

//+++++++++++++ API by using async and await Method 1 +++++++++++++++++
fetch('https://api.github.com/users/andazkumar46')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})
.catch((error) => console.log(error))