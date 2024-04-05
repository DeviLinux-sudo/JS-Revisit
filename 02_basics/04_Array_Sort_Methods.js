// Array Sort Methods 

//Alphabetic Sort() :  sorts an array alphabetically

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

//reverse() : reverses the elements in the Array 

console.log(fruits.reverse()); //[ 'Orange', 'Mango', 'Banana', 'Apple' ]

//toSorted() : sort an array without altering the original array ; ES2023

fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.toSorted()); //[ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

//toReversed() :  to reverse an array without altering the original array ; ES2023

//Numeric Sort 

/* sort() works well with Strings ; If numbers are sorted as strings "25" is bigger than "100" , because "2" is bigger than "1" . 
Can be fixed with compare function */

// Compare Function should return a negative, zero, or positive vakue, depending on the arguments.
// function(a, b){return a - b}

let points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return b - a}));

// Sort an Array with Random Array : can sort an numeric array in random order

points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(){return 0.5 - Math.random()}));

// To find highest and Lowest Value in the array ; use Math.max and Math.min





