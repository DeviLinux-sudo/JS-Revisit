/* Date objects represent a single moment in time in a platform-independent format. Calculation begins from January 1, 1970, UTC ; specifies number of milliseconds that have elapsed since January 1, 1970 */

let myDate = new Date();
// console.log(myDate); // 2023-11-27T13:44:25.860Z

// console.log(myDate.toString()); // Mon Nov 27 2023 13:44:37 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); //Mon Nov 27 2023

// console.log(myDate.toISOString()); //2023-11-27T13:48:17.724Z

// console.log(myDate.toJSON()); //2023-11-27T13:48:17.724Z

// console.log(myDate.toLocaleDateString());//11/27/2023

// console.log(myDate.toLocaleString());//11/27/2023, 1:48:17 PM

// console.log(myDate.toLocaleTimeString());//1:48:17 PM

// console.log(myDate.toTimeString());//13:48:17 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toUTCString());//Mon, 27 Nov 2023 13:48:17 GMT

// console.log(typeof myDate); //object

//To create a date

let myCreatedDate = new Date(2023, 0, 23);
myCreatedDate = new Date(2023, 0, 23, 5, 3); // 1/23/2023, 5:03:00 AM
myCreatedDate = new Date("2023-01-14"); //YY-MM-DD --> 1/14/2023, 12:00:00 AM
myCreatedDate = new Date("01-14-2023"); //MM-DD-YY --> 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); //1701094931 --> seconds

// Few other methods 

let newDate = new Date();
// console.log(newDate); //2023-11-27T14:32:30.889Z
// console.log(newDate.getMonth() + 1); //11
// console.log(newDate.getDay()); //1

// Other important method

console.log(newDate.toLocaleString('default',{
    weekday : "narrow"
}));


