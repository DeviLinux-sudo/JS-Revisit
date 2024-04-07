// Immediate Invoked Function Expressions (IIFE)

//IIFE is used to deal with problems caused by gloabl scope pollution 

// Example of IIFE 

(function chai(){
    console.log(`DB Connected`);
})(); // semicolan to end the function 

( (name) => {
    console.log(`DB Connected Two ${name}`);
}) ('Aarohi')