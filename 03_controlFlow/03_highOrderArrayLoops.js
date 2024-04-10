// Array specific Loops 

// Array of Arrays ---> ["", "", ""]
// Array of Objects ---> [{}, {}, {}]

const arr = [1, 2 , 3 ,4 , 5]

// For of 

for (const num of arr) {
console.log(num);
}

const greetings = "Hello World!"
for( const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//Map Object holds any key - value pairs and remembers teh original insertion order of the keys. Any value (both objects and primitive values) maybe used as either a key or a value ; only Unique Values and no duplicate values

const map = new Map()
// How to set values in map 
map.set('IN','India')
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR' , 'France')
console.log(map);

for(const [key, value] of map){
    console.log(key , ':-' , value);
}

const myObject = {
   js : 'javascript',
   cpp : 'C++',
   rb : 'ruby',
   swift: 'swift by apple'
}
 // for in 

 //for in loop with Objects
for(const key in myObject){
    // console.log(key) // js cpp rb swift
    // console.log(myObject[key]); // javascript C++ ruby swift by apple
    console.log(`${key} shortcut is for ${myObject[key]}`);
    /* Output :
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple */
}


//for in loop with arrays 
const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
    // console.log(key); // key are basically numbered or string indexes ; output : 0 1 2 3 4
    console.log(`${programming[key]} is at ${key}`);
/* Output : 
js is at 0
rb is at 1
py is at 2
java is at 3
cpp is at 4
*/


}

// Map is not iteratble ; so , for in loop doesnt goes on map

//for each // HIgh Order fUNCTIONS

const coding = ["js","rb","py","java","cpp"]

// coding.forEach(function (item) {
//     console.log(item) // js rb py java cpp
// })

// coding.forEach((item) => {
//     console.log(item) // js rb py java cpp
// })

coding.forEach((item, index, arr) => {
    console.log(item, index, arr) // js rb py java cpp
})
/* Output 
js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' ] */


// Scenarios for which for each loops are used 

// Arrays of Objects
const myCoding = [
    {
        langName : "Javascript",
        fileName : "js"
    },
    {
        langName : "Java",
        fileName : "java"
    },
    {
        langName : "C Plus Plus",
        fileName : "C++"
    },
    {
        langName : "Ruby",
        fileName : "rb"
    },
    {
        langName : "Python",
        fileName : "py"
    }
]

myCoding.forEach( (item => {
    console.log(`${item.langName} : ${item.fileName}`)
}))

/* Output 
Javascript : js
Java : java
C Plus Plus : C++
Ruby : rb
Python : py
*/

//For each loop doesnt return anything 

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter((num) => {
//     return num > 4
// }) // if you dont open scope then no need for braces
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

//with two arrays 

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

// with map function

// const newNums = myNums.map((num) => {return num+10})
// console.log(newNums) 
// /* Output : [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20 ]
// */


// Concept of Chaining

// const newNums = myNums.map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num >= 40)
// console.log(newNums); 
/* Output : [
  41, 51,  61, 71,
  81, 91, 101
] */

//Reduce 

// const testNums = [1,2,3]
// const myTotal = testNums.reduce(function (acc, currval) {
//     console.log(`accumulator : ${acc} and currentValue : ${currval}`)
//     return acc + currval
// }, 0)

// console.log(myTotal); 

/*Output 
accumulator : 0 and currentValue : 1
accumulator : 1 and currentValue : 2
accumulator : 3 and currentValue : 3
6
*/

const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)
console.log(myTotal); //6


