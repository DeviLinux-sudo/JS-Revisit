
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
console.log(loginUserMessage()
); //Undefined