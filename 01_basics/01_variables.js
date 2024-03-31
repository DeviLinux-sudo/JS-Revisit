// Variables with const are used ; when to declare 1. A new Array 2. A new Object 3. A new Function 4. A new RegExp

const accountId = 144553
let accountEmail = "Aarohi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //not recommended

// Prefer not to use var , due to block and functional scopes

accountEmail = "Saxena@gmail.com"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity])

//As, let is Block scope , it cannot be redeclared inside same block 

// let x = "John Doe"
// x = 09 // causes error

//  but, variables being a global scope can be redeclared 

// var x = "Aarohi Saxena"
// x = 09;



// Var allows Hoisting 

carName = "volvo";
var carName;

//let and const doesnt allow hoisting - using let and const before declaring might throw Referrenceerror

carName = "swift"
let carName = "volvo";