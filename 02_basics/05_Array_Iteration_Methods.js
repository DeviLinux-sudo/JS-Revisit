// forEach(itemValue , index , array) : calls a function ( a callback function ) once for each array element .

let fruits = ['Apple','Banana','Orange','Mango'];
//Using forEach Loop to log each elemnt along with its index
fruits.forEach(function(fruit,index)
{
    console.log('Index', index , 'Fruit :', fruit);
});

/* Output - Index 0 Fruit : Apple
Index 1 Fruit : Banana
Index 2 Fruit : Orange
Index 3 Fruit : Mango */

let colors = ['Red', 'Green', 'Blue'];

// Using forEach loop to log each element along with the original array
colors.forEach(function(color, index, array) {
  console.log('Index:', index , 'Color:', color, '; ', 'Original Array:', array);
});

/* Output : Index: 0 Color: Red ;  Original Array: [ 'Red', 'Green', 'Blue' ]
Index: 1 Color: Green ;  Original Array: [ 'Red', 'Green', 'Blue' ]
Index: 2 Color: Blue ;  Original Array: [ 'Red', 'Green', 'Blue' ] */


//map(itemValue,index,array) : creates a new Array by performing a function on each array element ; does not execute the function for array elements without values ; does not change the Original array 

let num1 = [45, 4, 9, 16, 25];
let num2 = num1.map(function(value,index,array) {
    return value*2;
});
console.log(num2); // [ 90, 8, 18, 32, 50 ]
console.log(num1); //[ 45, 4, 9, 16, 25 ]

//flatMap() : first maps all elements of an array and then creates a new array by flattering the array

let flatArray = num1.flatMap((x) => x * 2);
console.log(flatArray); //[ 90, 8, 18, 32, 50 ]
console.log(num1); //[ 45, 4, 9, 16, 25 ]

//filter() : creates a new array from elements that can pass given condition 

let filterArray = num1.filter(function(value) {
  return value > 18
});
console.log(filterArray); //[ 45, 25 ]
console.log(num1); //[ 45, 4, 9, 16, 25 ]

//reduce(initial value/ previously returned value , item value , item index , array) :  reduce the elements of an array to a single value; It iterates over each element of the array, applying a callback function to each element, and accumulating the result into a final value.

let reducedArray = num1.reduce(function( total , value ) {
  return Math.max(total, value);
}, -Infinity);

console.log(reducedArray); // 45

// reduceRight() works from right-to-left in the array

//every() : returns in type boolean ; checks if all array values pass a test

// Let's Check if all elements are even numbers 

let even1 = num1.every(function(number){return num1 % 2 == 0; });
console.log(even1); // false 

//some(elemnt, index, array) : method in JavaScript is used to check if at least one element in an array passes a certain test implemented by a provided function. It returns true if at least one element passes the test, otherwise false.

let someEven = num1.some(function(num1){
  return num1 % 2 == 0;
});

console.log(someEven);//true

//Array.from() : Creates a new, shallow-copied array instance from an array-like or iterable object. It allows you to convert array-like objects (e.g., DOM elements, strings) or iterable objects (e.g., Map, Set) into arrays.

let str = 'hello';
console.log(Array.from(str)); // Output: ['h', 'e', 'l', 'l', 'o']

//keys() : returns an iterable containing the keys of an array. These keys are the indices of the array elements, starting from 0.

let keys = fruits.keys();
for(let key of keys){
  console.log(key);
}

/* Output - 
0
1
2
3
*/

//entries() : returns an iterator that contains key-value pairs for each index in the array . Each key value pair is represented as an array where first element is index(key) and the second element is corresponding value in the array

let entries = fruits.entries();

for(let entry of entries){
  console.log(entry);
}
/* Output 
[0, 'apple']
[1, 'banana']
[2, 'cherry']
*/

//Array with() : method as a safe way to update elements in an array without altering the original array.

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths); // [ 'Januar', 'Februar', 'March', 'April' ]

//Spread(...) : expand an iterable (like an array or string) into individual elements.ES6 Feature

//Spread in Array Literals 
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

//Spread in Function Calls
function sum(a, b, c) {
  return a + b + c;
}

const num = [1, 2, 3];

console.log(sum(...num)); // Output: 6

//Spread with Objects 
const person = { name: 'John', age: 30 };
const newPerson = { ...person, city: 'New York' };

console.log(newPerson); // Output: { name: 'John', age: 30, city: 'New York' }

//Spread with Strings 
const string = 'hello';
const chars = [...str];

console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

//Spread to Clone Arrays 
const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // Output: [1, 2, 3]

