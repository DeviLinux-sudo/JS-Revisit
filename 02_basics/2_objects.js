//singleton (one of it's kind)- Declaring like literals , wont produce singleton but via constructor , it does . For eg. using ---> object.create

//Object literals 
const mySym = Symbol("key1");

const JsUser = {
    name : "Aarohi",
    "full name":"Aarohi Saxena",
    [mySym]:"mykey1",
    age : 18,
    location : "Somewhere on Earth",
    email : "arohisaxena@xyz.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
};



console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);
console.log(JsUser["full name"]);

JsUser.email = "devili@chatgpt.com";
// Object.freeze(JsUser); //it will freeze the object , preventing any changes 
JsUser.email = "devili@microsoft.com";
console.log(JsUser);

JsUser.greeting= function(){
    console.log("Namaste jsuser");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());