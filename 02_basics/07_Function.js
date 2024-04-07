
// Paramters : Items in the bracket of function on defination ; Arguments : values that are passed on function call

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers (); //NaN
addTwoNumbers(3,4); //7
addTwoNumbers(3, "4"); //34

function loginUserMessage(username){
    return `${username} just logged in`
}

loginUserMessage("Aarohi") // Doesnt print ; just returns
console.log(loginUserMessage("Aarohi")); //Aarohi just logged in
console.log(loginUserMessage()); //Undefined

//Using rest operators 

function calaculatorCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calaculatorCartPrice(200,400,500,800))//[ 500, 800 ]

// Functions with Objects 

const user = {
    userName : "Aarohi",
    price : 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user) //Username is Aarohi and price is 200

//Functions with Arrays 

const myNewArray = [100,200,400,600,800]

// A Function that takes array and returns second value 

function returnSecondValue (getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //200

//Mini Hoisting

console.log(addOne(5)) // 6

function addOne(num){
    return num + 1;
}

// console.log(addTwo(5)) //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 6;
}


//Arrow Function and this keyword

console.log(this) // {} where as in browser , it will return window Object

// function me(){
//     let userName = "Aarohi"
//     console.log(this); // shows various properties
//     console.log(this.userName); //undefined
// }

//Arrow Function 

const me = () => {
    let userName = "Aarohi"
    console.log(this);
}

me() // {}

// const addTwoNum =  (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4)) //7

//Can also be written as 
//Always wrap written in paranthesis 

const addTwoNums = (num1,num2) => (num1 + num2) 
console.log(addTwoNums(3,4)) //7
