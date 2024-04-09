// if(true) {} // is when, code inside if runs.

//instead of true , conditions are checked , via : > , < , >= , <= , != , == , === (data and type checking)

//shorthand 

const balance = 700;
if(balance > 200) console.log("test");

//else - if 
if(balance > 0 ){
    console.log("Balance 0")
}else if (balance > 500)
{
    console.log("balance 600")
}else if(balance > 300) {
    console.log("balance 400")
}else{
    console.log("default Balance")
}

// Writing If condition using && ( when used && ; dono condition true honi chahiye )
// (Any One condition cane be true ; for ||)

//Falsy Values : False ,  0 , -0 , bigint , 0n , null , undefined , NaN 
// Truth Values : Everything that is not Falsy value , is a truthy value 

// Surprising Truthy Values ; "0" , "false" , " " , [] , {} , function(){} 

//How to check empty Arrays 

const userEmail = [];
if(userEmail.length === 0) {
    console.log("Array is empty")
}

// How to check Empty Objects 

const emptyObject = {} ;
if(Object.keys(emptyObject) === 0 ){
    console.log("Empty Object")
}

// Some test cases , to be known : false == 0 --> true ; false == '' -> true ; 0 == '' --> true

//Nullish Coalescing Operator (??) : null undefined

let val1; 

val1 = 5 ?? 10;
// works to protect from getting null values 
val1 = null ?? 10;
// also works to protect from getting undefined values 
val1 = undefined ?? 10;
// to see which of the two values gets assigned to one 
val1 = null ?? 10 ?? 20; // oupt put : 10 
console.log(val1);

// Ternary Operator 

condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


