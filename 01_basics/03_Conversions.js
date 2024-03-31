// Strings to Number 

let score = "Aarohi"
//console.log(typeof score)
let valueInNumber = Number(score);
//console.log(typeof valueInNumber)

//Conclusions
// "33" => 33 ( number )
// "33abc" => NaN ( not a number)
// true => 1; false => 0
// Number("3.14") => 3.14
// Number(Math.PI) => 3.141592653589793
// Number(" ") => 0
// Number("") => 0
// Number("99 88") => NaN
// Number("John") => NaN


// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer



// Booleans to Numbers

let isLoggedIn = "Aarohi"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console,log(booleanIsLoggedIn)

// 1 => true; 0 => false
// " " => false
// "hitesh" => true

// Booleans to Strings 

// String(false) => "false"
// String(true)  => returns "true"

// false.toString()  => "false"
// true.toString()   => "true"


// Number to Strings
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// 33 => "33" typeof string

// Automatic Type Conversion

// 5 + null    => 5         because null is converted to 0
// "5" + null  => "5null"   because null is converted to "null"
// "5" + 2     => "52"      because 2 is converted to "2"
// "5" - 2     => 3         because "5" is converted to 5
// "5" * "2"   => 10        because "5" and "2" are converted to 5 and 2