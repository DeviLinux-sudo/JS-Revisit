// Date is a pain point in ECMA Script , is why there's a proposal to use Temporal API as global Object to use instead of Date 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString());
let anotherCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(anotherCreatedDate.toLocaleString());

//Time Stamps 

let timeStamp = Date.now();

console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// Customize the Dates more ?

newDate.toLocaleString('default', {
    weekday : "long"
})