// Javascript has 8 Data Types 

// 1.Numbers: Javascript numbers are always one type: double (64-bit floating point).
let length = 16;
let weight = 7.5;

// 2.Strings:
let color = "Yellow";
let lastName = 'Johnson';

// 3.Booleans
let x = true;
let y = false;

// 4.BigInt
let bigNumber = BigInt("123456789012345678901234567890");
let bigNum = 4579867495787585489365874687n;

// 5.Undefined : variable without a value
let car; // value is undefined ; type is undefined

let car1 = ""; // value is " ", typeof is string

// 6.Null : standAlone Value

typeof(null) // object
typeof(car) // undefined 

// 7.Symbol (used in react components)

const id = Symbol('123')
const anotherId = Symbol('345')

console.log(id === anotherId) // false

/* 8. Object (later)
Object Data Type can contain : 
1. An Object
2. An Array
3. A Date
*/

// Object:
const person = {firstName:"Aarohi", lastName:"Saxena"};

// Array object:
const cars = ["Suzuki", "Volvo", "BMW"];

// Date object:
const date = new Date("2024-03-31");


