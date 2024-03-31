const name = "Aarohi" // declaring Strings
const nameAgain = 'Aarohi' // double quotes or single quotes works the same
let speech = "It's Alright";
speech = "We can write 'single quotes within double quotes";
console.log(speech.length) // to know the number of characters it contains

//Escape Characters : backlash character turns special characters into string characters

let text = "We can use \' Single Quote \' , \" Double Quote \" and BackSlash \\  \n using Backlash escape character"
console.log(text) // o/p : We can use ' Single Quote ' , " Double Quote " and BackSlash \ 
// using Backlash escape character


const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //template string (ES6 2016) --> good way of defining

//writing expressions in template strings

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);


// Though Javascript Strings are primitive values but it canalso be defined as Objects ; 

const gameName = new String ('Aarohias'); // object declaration of String







