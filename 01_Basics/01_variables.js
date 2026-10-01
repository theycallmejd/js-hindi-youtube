const accountId = 144553
let accountEmail = "jaydevdas110@gmail.com"
var accountPassword = "300106"
accountCity = "Bhubaneswar"

// accountId = 2 // not allowed
accountEmail = "zedx@gmail.com"
accountPassword = "1234567890"
accountCity = "Bangalore"
let accountState; //You can use semicolumn or not its depends on you.

/*
Prefer not to use "var" because of issue in block scope and functional scope
*/

console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])