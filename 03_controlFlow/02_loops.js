
// For 

for( let index = 0 ; index < 10 ; index++ ){
    const element = index;
    console.log(element)
}

//nested loop

for(let i = 0 ; i <= 10; i++){
console.log(`Outer loop value : ${i}`);
for(let j = 0; j <= 10; j++){
console.log(`Inner loop value ${j} and inner loop ${i}`);
}

}

//Normal Loop through Array 

let myArray = ["flash" , "batman" , "superman"]
console.log(myArray.length);
for(let i = 0 ; i < myArray.length; i++){
    const element = myArray[i];
}

//break and continue 

for(let index = 1; index<= 20; index++) {
    if(index==5) {console.log(`Detected 5`)
    break} // To break the control Flow of the Loop 
}
console.log(`Value of i is ${index}`);

for (let i = 1; i <= 30; i++){
    if(i==3) {
        console.log(`Detected 3`);
        continue; // prints the condition and skip that particular iteration , and continues with other iterations
    }
    console.log(`value of i is ${i}`)
}


//While 

// while( condition is true to execute the loop ){}

let index = 0;
while(index <= 10){
    console.log(`value of index is ${index}`)
    index = index +2;
}

//while Loop over Array 

let arr = 0
while(arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

// do- while ( run loop atleast once)

let score = 11;

do{
    console.log(`score is ${score}`);
    score++
} while (score <= 10);