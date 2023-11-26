/* JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

/* Primitive DataTypes :-
 1. Call By Value : Changes done to variables of this type are always done to the copy and not the actual value.
 2. 7 Types : String, Number, Boolean, null(empty), undefined(undecided), symbol(for uniquness), BigInt(for scientific values, big numbers)
 */

 const score = 100; //Number
 const scoreValue = 100.3; //Number
 const isLoggedIn = false; // Boolean
 const outsideTemp = null; // Empty
 let userEmail ; //undefined 
 userEmail = undefined; // can be assigned like this too 

 const id = Symbol('123');
 const anotherId = Symbol('123');
//  console.log(id === anotherId);// False

const bigNum = 38975689786n; //BigInt


 /* Non-Primitive DataTypes :-
 1. Call By Reference : Values whose refrences in the memory are directly allocated.
 2. Arrays, Objects, Functions
 */

 const countries = ["India", "Bangladesh" , "Russia"]; //Arrays

 let myObj= {
    name : "Aarohi",
    age : 22,
 } // object are always within curly braces and can have various data types.

 const myFunction = function(){
    console.log("Hello World");
 } // Function

 //typeof operator
//  console.log(typeof bigNum); //bigint
// console.log(typeof outsideTemp); //object
// console.log(typeof myFunction); //function , i.e object function

// datatype of all primitive types are object only.