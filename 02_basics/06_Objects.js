//Singleton : Creates Single Instance ; and is only made when Object is declared with new keyword and not via literal 


const mySym = Symbol("key") //Defining variale of symbol type
//Objct Literals
const jsUser = {
    name : 'Aarohi',
    [mySym] : "mykey",
    "full-name":"Aarohi Saxena",
    age : 26,
    location : "punjab",
    email : 'aarohi@google.com',
    isLoggedIn : false,
    lastLoginDays:["Monday","Sunday"]
}

// Accessing Object Literal Properties

console.log(jsUser.email); //aarohi@google.com
console.log(jsUser["email"]); //aarohi@google.com

// bracket accessing becomes neccessary in below case 
console.log(jsUser["full-name"]); //Aarohi Saxena
console.log(jsUser[mySym]); //how to access value of type symbol 

// Object.freeze(jsUser); // It freezes Object and prevents its value from getting changed

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting); // returns reference of the function ; [Function (anonymous)]
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greetingTwo());


const tinderUser = {}

tinderUser.id = '287653'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "sammy@user.com",
    fullname: {
        userFullName : {
            firstName : "sam",
            lastName : "choudhary"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName); //sam

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {5: "a" , 6: "e"}
//Object.assign(target,source)
let obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'e' }

//But can be done by spread Operator 

obj4 = { ...obj1 , ...obj2 }; 
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Array of Objects 

const multipleUsers = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    }
]

//can access a property of a particular object by 

console.log(multipleUsers[1].email); //b@gmail.com

//
console.log(tinderUser); //{ id: '287653', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '287653', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '287653' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLogged')); //false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

//Objects Destructuring 

const course = { 
    courseName : "Js",
    price:"99",
    courseInstructor : "Aarohi"
}

// instead of writing course.cousreInstructor to get values of courseInstructor, we can just write instructor and we can access the values of courseInstructor from the course object
const {courseInstructor : instructor} = course

console.log(instructor);