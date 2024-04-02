// Date is a pain point in ECMA Script , is why there's a proposal to use Temporal API as global Object to use instead of Date 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString());