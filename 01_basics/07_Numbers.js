
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

console.log(Number(true)); //
console.log(Number(false)); //
console.log(Number("10")); //
console.log(Number("  10")); //
console.log(Number("10  ")); //
console.log(Number(" 10  ")); //
console.log(Number("10.33")); //
console.log(Number("10,33")); //
console.log(Number("10 33")); //
console.log(Number("John")); //
console.log(Number(new Date("1970-01-01"))); //

// parseInt() : parses a string and returns a whole number; only the first NUmmber is returned

console.log(parseInt("-10")); //
console.log(parseInt("-10.33")); //
console.log(parseInt("10")); //
console.log(parseInt("10.33")); //
console.log(parseInt("10 20 30")); //
console.log(parseInt("10 years")); //
console.log(parseInt("years 10")); //

//parseFloat() : parses a string and returns a number ; only first number is returned

console.log(parseFloat("10")); //
console.log(parseFloat("10.33")); //
console.log(parseFloat("10 20 30")); //
console.log(parseFloat("10 years")); //
console.log(parseFloat("years 10")); //