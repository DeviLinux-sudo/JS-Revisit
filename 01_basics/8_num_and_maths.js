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

// console.log(Math); // Object within itself and has many properties --> Object [Math] {}
// console.log(Math.abs(-4)); // absolute function makes negative value as positive and positive value stays positive. --> 4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4,3,6,8)); //3
// console.log(Math.max(4,3,6,8)); //8

// console.log(Math.random()); // Values always ranges from 0 to 1 ---> 0.3878911870289443
// console.log(Math.random()*10);// In case , I want my values to range between 0 to 10 , it shifts the number to left --> 7.937481266320168
// console.log(Math.random()*10 + 1); // to avoid values like 0.0 --> 5.735290786604929
// console.log((Math.random()*10) + 1); // 10.55063495067321

// If number has to be written, ranging from min to max 

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min); // 11



