
let number = 9;
console.log(number); // 9
let number1 = new Number(100); // Number as an object
console.log(number1); // [Number : 100]


// Number Methods

// toString() : method returns a number as a string

console.log(number1.toString().length); // 3

// toFixed() : returns a string, with the number written with a specified number of decimals

console.log(number1.toFixed(2)); // 100.00

// toPrecision() : returns a string, with a number written with a specified length

const otherNumber = 123.6785
console.log(otherNumber.toPrecision(4)); // 123.7

// toLocaleString() : 

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,00,000


// toExponential() : returns a string, with a number rounded and written using exponential notation; parameter defines the number of characters behind the decimal point

const expo = 9.656;
console.log(expo.toExponential()); // 9.656e+0
console.log(expo.toExponential(4)); // 9.6560e+0

//ValueOf() : Returns Number as a Number

console.log((100+23).valueOf()); // 123

//Number() method can be used to convert JavaScript variables to numbers and dates to number

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10")); // 10
console.log(Number("  10")); // 10 
console.log(Number("10  ")); // 10 
console.log(Number(" 10  ")); // 10
console.log(Number("10.33")); // 10.33
console.log(Number("10,33")); // NaN
console.log(Number("10 33")); // NaN
console.log(Number("John")); // NaN
console.log(Number(new Date("1970-01-01"))); // 0

// parseInt() : parses a string and returns a whole number; only the first NUmmber is returned

console.log(parseInt("-10")); // -10
console.log(parseInt("-10.33")); // -10
console.log(parseInt("10")); // 10
console.log(parseInt("10.33")); // 10
console.log(parseInt("10 20 30")); // 10
console.log(parseInt("10 years")); // 10 
console.log(parseInt("years 10")); // NaN

//parseFloat() : parses a string and returns a number ; only first number is returned

console.log(parseFloat("10")); // 10
console.log(parseFloat("10.33")); // 10.33 
console.log(parseFloat("10 20 30")); // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years 10")); // NaN


// ################################# Numbers and its properties #########################


// Numbers belongs to Javascript Number Object 
// These properties can be accessed as Number.property ; using x.peroperty , where x is  a variable or a value , will return undefined .


let x = Number.EPSILON; // 	The difference between 1 and the smallest number > 1 i.e 2.220446049250313e-16

x = Number.MAX_VALUE ; // The largest number possible in JavaScript i.e 1.7976931348623157e+308

x = Number.MIN_VALUE; // The Smallest number possible in Javascript i.e 5e-324

x = Number.MAX_SAFE_INTEGER; // represents the maximum safe integer in JavaScript i.e (2^53 - 1)

x = Number.MIN_SAFE_INTEGER; // represents minimum safe integer in js i.e -(2^53 - 1)

x = Number.POSITIVE_INFINITY; // 	Infinity (returned on overflow)

x = Number.NEGATIVE_INFINITY; // Negative infinity (returned on overflow)


