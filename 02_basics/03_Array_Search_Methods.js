// Array Search Methods 

//indexOf(item, start) : item : item to search for ; start : Where to start the search. Negative values will start at the given position counting from the end, and search to the end ; Searches an array for an element value and returns its position
let fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple",1)); //2

//array.lastIndexOf()(item,start) : Returns the position of the last occurences of the specified element.

//includes() : Allows us to check if an element is present in an array(including NaN , unlike indexof)
console.log(fruits.includes('Orange')); // true ; ES 2016 Feature 

//find() : returns the value of the first array element that passes a test function ; ES6 Feature

let numbers = [4,9,16,25,29];
let first = numbers.find(myFunction);
console.log(first); //25

function myFunction (value, index, array ){ // takes 3 arguments : item value ; item inddex ; array itself 
    return value > 18; 
}

//findIndex() : returns index of teh first array element that passes a test function ; ES6 Feature

first = numbers.findIndex(myFunction)
console.log(first); // 3

// findLast() : Will start from th end of an array and return the value of the first element that satisfies a condition 

first = numbers.findLast(x => x > 20);
console.log(first); //29

//findLastIndex() : finds index of the last elemnt that satisfies a condition 

first = numbers.findLastIndex(x => x > 40);
console.log(first); //-1 ( was not able to found)

