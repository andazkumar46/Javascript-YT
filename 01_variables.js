const accountId = 123456;
let accountEmail = "abc@google.com"
var accountPassword = "22113344"
accountCity = "Nw Delhi"
let accountState;

// accountId = 224455;  // not allowed to change the constant value
accountEmail = "hc@hc.com"
accountPassword = "556677"
accountCity = "Patna"

console.log(accountId);  
/*
prefer not tpo use var
because of issue in block scope {} and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

