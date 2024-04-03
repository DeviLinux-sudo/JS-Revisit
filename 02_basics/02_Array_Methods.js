// Array Methods 

let fruits = ["Banana" , " Mango" , "Orange" , "Apple" ]

//length 
console.log(fruits.length); //4

//toString() : Converts an array to a String of comma seperated array values 
console.log(fruits.toString()); //Banana, Mango,Orange,Apple

//at() : returns indexed element from an array same as [0]
console.log(fruits.at(2)); //Orange
console.log(fruits.at(-1)); //Apple : Last Element

//join() : joins all array elements into a string 
console.log(fruits.join("*")); //Banana* Mango*Orange*Apple

//Array pop() : removes last element from Array 
console.log(fruits.pop()); //Apple
console.log(fruits); // [ 'Banana', ' Mango', 'Orange' ]

//Array shift() : removes frist element nd shifts all other elements to lower index
console.log(fruits.shift()); //Banana
console.log(fruits); //[ ' Mango', 'Orange' ]

//Array unshift() : adds a new element to an array at the beginning and unshifts older elements ; unshift() method returns new array length
console.log(fruits.unshift("Banana")); //3
console.log(fruits); //[ 'Banana', ' Mango', 'Orange' ]

//Instead of Delete ; Use pop() or shift()

//Array concat() : creates new Array by merging existing arrays
const myGirls = ["Esma", "Mira"];
const myBoys = ["Ismail", "Krishna", "Ram"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//Array copyWithin() : copies array elements to another position in an array 
console.log(fruits.copyWithin(2,0)); // copy to index 2, all elements from index 0 // [ 'Banana', ' Mango', 'Banana' ]










