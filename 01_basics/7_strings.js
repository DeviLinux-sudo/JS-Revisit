//Simple String Declaration

const name = "Aarohi";
const repoCount = 10;

// Syntax thatone shall avoid using
// console.log( name + repoCount + "a simple string to print");

// Syntax one shall use : String Interpolation
console.log(`Hi, I am ${name} and my repo count is ${repoCount}`);

//Another way of declaring String 
// Try using this declaration on browser console, for more clarity

const gameName = new String('Aarohi-Saxena');

// console.log(gameName[0]); //Accessing the key value pair -> A
// console.log(gameName.__proto__); //  {} -> Object
// console.log(gameName.length); // 6 
// console.log(gameName.toUpperCase()); // AAROHI
// console.log(gameName.charAt('2')); // r
// console.log(gameName.indexOf('o')); // 3

// most used string methods
const newString = gameName.substring(0,4); // ignores negative value
console.log(newString); // Aaro

const anotherString = gameName.slice(-7,4); // Can give negative values too in this 
console.log(anotherString); //

const newStringOne = "    Aarohi      ";
console.log(newStringOne);
console.log(newStringOne.trim()); // only works on whitespaces and line terminators

const url = "https://aarohi.com/aarohi%20saxena";
console.log(url.replace('%20','-'));
console.log(url.includes('sara'))
console.log(gameName.split('-'));

//try all prototype methods on string listed on browser 