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