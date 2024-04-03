//JS Arrays can hold one or more type of values in it.

// creating an array 
const cars = ["Maruti", "Volvo" , "BMW"]; // [ 'Maruti', 'Volvo', 'BMW' ]
console.log(cars); // Accessing Full Array
// or using the js keyword new 
const cars1 = new Array("Maruti","Volvo","BMW"); // [ 'Maruti', 'Volvo', 'BMW' ]
console.log(cars1);


//Accessing Array Elements 
let listCar = cars[0];
console.log(listCar); // Maruti

// Accessing last element in Arrays
console.log(cars[cars.length-1]); //BMW

//Changing an Array Element 
cars[0] = "Suzuki";
console.log(cars); //[ 'Suzuki', 'Volvo', 'BMW' ]

//Converting an Array to String 
const fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango

/*Arrays are special typeof Objects ; why ?? Arrays use numbers to access its elements , eg. fruits[0] ; whereas , Objects uses names to access its memebers , eg. person.firstName
 Is one can have variables of different types in same Array ; Can have Objects , Functions or Arrays within Arrays */

 //Looping Array Elements
// For Loop 
for(let i = 0; i<fruits.length ; i++){
    console.log(fruits[i]);
} // every element is represented seperately

//For Each
fruits.forEach(fruit => console.log(fruit));

//Adding an Element to the Array 
fruits.push("Lemon");
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Lemon' ]

//Associative Arrays or Hashes : Arrays with named indexes are called Hashes ; Js doesnt use named indexes but only numbered 

//When to use Arrays and Objects : Use Arrays for Numbers and Use Objects for Strings/Text

//Never use Array for one element 

//How to recognize an array 

//1. typeof

console.log(typeof fruits); //object

//2. Array.isArray()

console.log(Array.isArray(fruits)); //true

//3. instanceof

console.log(fruits instanceof Array); //true









