const myArr = [0,1,2,3,4,5]; // elements can be of any type under single variable.

// console.log(myArr[0]); // elements can be accessed like this 
// console.log(myArr["zero"]) // elements cannot be accessed like this

/* 1. JS Arrays are resizable and can hold an array inside an array too , it's that diverse with data types.
2. JS Arrays are not associative arrays , cannot use arbitrary strings as indexes.
3. Have zero-based indexing ; 1st element starts with 0 always.
4. All built in copy opeartions with any javascript objects create shallow copies(shares references to same object) and not deep copies(doesnt share references to same objects).
*/
const cities = ["Amritsar","Hyderabad","Bengaluru"];
const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[2]);

//Array Methods 

 myArr.push(6); //inserting a number in an array

 myArr.pop(); //deleting the element on the top of the stack

 myArr.unshift(9); //[9, 0, 1, 2, 3, 4, 5]--->gets inserted at the start of the array ; it is time consuming operation ; as it has to shift other elements.

 myArr.shift(); //[ 0, 1, 2, 3, 4, 5 ]--> like pop()

//  console.log(myArr.includes(9)); // Boolean type answer --> False
//  console.log(myArr.indexOf(9)); // When it doesnt know , it returns -1 , else it returns index of the element asked ---> -1

//  console.log(myArr);

 const newArr = myArr.join() // Adds all the elements of an array into a string seperated by the specified seperator string nd coverts the array into string
//  console.log(newArr); //0,1,2,3,4,5
//  console.log(typeof newArr); //string

const n1 = myArr.slice(1,3); //[ 1, 2 ]
// console.log("N1:",n1);
// console.log("After slice", myArr);
const n2 = myArr.splice(1,3); //[ 1, 2, 3 ]
// console.log("N2:",n2);
// console.log("After splice", myArr);

// Proof that Arrays can take anything as data

const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];
// marvel_heros.push(dc_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// marvel_heros.concat(dc_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros,...dc_heros]; //Spread operator --> take a glass and drop it down , it will spread into indiviual pieces. Similarily, arrays spreads into indiviual pieces.

// console.log(all_new_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array); //[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// console.log(Array.isArray("Aarohi")); // false
// console.log(Array.from("Aarohi")); //[ 'A', 'a', 'r', 'o', 'h', 'i' ]
// console.log(Array.from({name :"Aarohi"})); // if couldnt convert then gives empty arrays like []

let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]

