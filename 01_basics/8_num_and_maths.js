const score = 400; //Assuming by default that it is of number type
console.log(score);
const balance = new Number(100); //Especially defining object of number type
console.log(balance);

/* If tried on browser console , Numbers have very limited and less prototype methods or functions as compared to that as Strings */

console.log(balance.toString());
console.log(typeof balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// Can try other methods from Browser console and mdn docs 

// ***************************Maths*******************************

console.log(Math); // Object within itself and has many properties --> Object [Math] {}


