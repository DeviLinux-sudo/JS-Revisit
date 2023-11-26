//if input is undefined
let score = 33;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // 33

// if input is in string form
score = "33abc";

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //Nan (Not a Number)

//if input is null
score = null;

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // 0

//if input is undefined
score = undefined;

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN

//if input is boolean
score = true;

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // 1

//if input is not able to convert into number , as everything in string is char
score = "Aarohi";

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// number to boolean conversion :-
let isLoggedIn = 33;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = 0;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = "Aarohi";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false;
// "" => false
// "Saxena" => true

// Converting some number to string 

let n = 33; 
let StringOfn = String(n);
console.log(typeof StringOfn);

// ***********************Operations*************************************

let value = 3;
let negValue = -value;
console.log(negValue);

// Basic Operations

// console.log(2+2); //Addition
// console.log(2*2); //Multiplication
// console.log(2-2); //Substraction
// console.log(2**2); //Power
// console.log(2/2); //Divide
// console.log(2%2); //Modulus ( Remainder)

let str1 = "Aarohi";
let str2 = "Saxena";
let str3 = str1 + str2;
console.log(str3);

// complex string situations

/* if it starts with string then whole thing gets converted to string base ; if it starts with humber , then operation happens before and then string is attached */

console.log("1" + 2); //12
console.log(1+"2"); //12
console.log("1" + 2 + 2); //122
console.log(1+2+"2"); //32
console.log(1+"2"+"2"); //122
console.log(1+"2"+2); //122
console.log(1+2+2); //5

// conversions that doesnt make sense

console.log(+true); //1
console.log(+""); //0

//Prefix and postfix Increment and decrement Operator 

/* Postfix : x++ : the increment operator increments and returns the value before incrementing. */
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

/* Prefix : ++x : the increment operator increments and returns the value after incrementing. */
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
