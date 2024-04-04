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

//Array copyWithin() : copies array elements to another position in an array ; overwrites existing values ; doesnt add items to the array ; doesnt change the length of the array
fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
console.log(fruits.copyWithin(2,0)); // copy to index 2, all elements from index 0 // [ 'Banana', 'Orange', 'Banana', 'Orange', 'Apple' ]
fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
console.log(fruits.copyWithin(2,0,2)); //copy to index 2 , elements from index 0 to 2 // [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]

// Flatenning an Array : Converting a multiDimensional Array to One dimensional 
// flat() : method creates a new array with sub-array elements concatenated to a specified depth ; ES2019 Feature

const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat()); //[ 1, 2, 3, 4, 5, 6 ]

//splice() : can be used to add new items to an array
fruits = ["Banana", "Orange", "Apple", "Mango"]
 // 1st paramter : where new elements should be added ; 2nd parameter : how many elemnts should be removed ; rest of the paramters defines new elements to be added
 console.log(fruits.splice(2, 2, "Lemon", "Kiwi")); // returns removed elements ; [ 'Apple', 'Mango' ]
 console.log(fruits); //[ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]

 //To remove elements via splice() ; omit the last two parameters 

 //toSpliced() : Safe way to splice an array without altering the original array 
 //Difference between splice and tospliced is that new method creates a new array , keeping original array unchanged , while old method altered the original array ; ES2023

 let months = ["Jan","Feb","Mar","Apr"];
 console.log(months.toSpliced(0,1)); //[ 'Feb', 'Mar', 'Apr' ]
 console.log(months);//[ 'Jan', 'Feb', 'Mar', 'Apr' ]

 //slice() : slices out a piece of an array into a new array ; doesnt remove any elements

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(3)); //[ 'Apple', 'Mango' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]

console.log(fruits.slice(1,3)); //[ 'Orange', 'Lemon' ]



















