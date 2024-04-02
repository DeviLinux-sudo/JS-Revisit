// MATH Object has no constructor 
// MATH Object is static 


// Math.property
// JS Provides 8 mathematical constants that can be accessed as Math Properties

console.log(Math.E       ); // returns Euler's number ; 2.718281828459045
console.log(Math.PI      ); // returns PI ; 3.141592653589793
console.log(Math.SQRT2   ); // returns the square root of 2 ; 1.4142135623730951
console.log(Math.SQRT1_2 ); // returns the square root of 1/2 ; 0.7071067811865476
console.log(Math.LN2     ); // returns the natural logarithm of 2 ; 0.6931471805599453
console.log(Math.LN10    ); // returns the natural logarithm of 10 ; 2.302585092994046
console.log(Math.LOG2E   ); // returns base 2 logarithm of E ; 1.4426950408889634
console.log(Math.LOG10E  ); // returns base 10 logarithm of E ; 0.4342944819032518

// Commonly used methods using Math.method(number)

console.log(Math.abs(-4)); // Absolute Value ; returns + ve valued to negative numbers ; 4
console.log(Math.round(4.5)); // returns rounded to it's nearest integer ; 5
console.log(Math.ceil(4.2)); // rounded up to nearest integer ; 5
console.log(Math.floor(4.9)); // rounded down to nearest integer ; 4
console.log(Math.max(4,5,7,2)); // finds highest of the given ; 7
console.log(Math.min(4,5,7,2)); // finds lowest of the given ; 2 
console.log(Math.trunc(-4.5)); // returns integer part of x  ; -4
console.log(Math.sign(-4)); //  returns to tell if negative , null or positive ; -1
console.log(Math.pow(4,5)); // power of  ; 1024
console.log(Math.sqrt(46)); // square root ; 6.782329983125268
console.log(Math.random()); // returns a random number between 0 (inclusive), and 1 (exclusive) ; 0.253519100543276
console.log((Math.random()*10)+1); //2.106667368666512

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // 14

