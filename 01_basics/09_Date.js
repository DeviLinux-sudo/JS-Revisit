// Date is a pain point in ECMA Script , is why there's a proposal to use Temporal API as global Object to use instead of Date 

let myDate = new Date()
console.log(myDate.toString()); //Wed Apr 03 2024 10:47:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Wed Apr 03 2024
console.log(myDate.toLocaleString()); //4/3/2024, 10:47:25 AM
console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0 , 23) 
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
let anotherCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(anotherCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

//Time Stamps 

let timeStamp = Date.now();

console.log(timeStamp); //1712142171133
console.log(myCreatedDate.getTime()); //1674432000000
console.log(Math.floor(Date.now()/1000)); //1712142171

let newDate = new Date();
console.log(newDate); //2024-04-03T11:02:51.134Z
console.log(newDate.getMonth() + 1); //4
console.log(newDate.getDay()); //3

// Customize the Dates more ?

newDate.toLocaleString('default', {
    weekday : "long"
})