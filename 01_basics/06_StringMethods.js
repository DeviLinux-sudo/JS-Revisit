let internetName = new String("Aarohi");
internetName = "DeviLinux";
console.log(internetName.length);

// 1. How to Extract String Characters : 4 methods 

//CharAt() : returns the character at a specified index(position) in a string
console.log(internetName.charAt(2));
//charCodeAt() : returns the UTF-16 code of the character at a specified index in a string 
console.log(internetName.charCodeAt(2));
//String at() : new edition : ES2022 ; Returns the character at a specified index (position) in a string ; same as charAt() ; at() allows the negetive value whereas charAt()
console.log(internetName.at(2));
console.log(internetName.at(-2)); //? 

// 2. Property Access

//If No Character found, [] returns undefined , while charAt() returns an empty string

// 3. Extracting String Parts

      // 3.1 slice(start,end) : extracts a part of string and returns the xtracted part in a new String 
console.log(internetName.slice(5,8)); //inu
//Omit one paramter , slices out rest of the String
console.log(internetName.slice(5)); // inux
//If Paramter is negative ? then position is counted from end
console.log(internetName.slice(-5)); // Linux
console.log(internetName.slice(-3,-1)); // First parameter should always be greater than second parameter ; o/p : nu

      // 3.2 substring() --> same as slice() , only difference parameter values less than 0 are treated as 0
console.log(internetName.substring(5,7)); // in

       // 3.4 substr() --> same as slice() , only difference the second parameter specifies the length of the extracted part ; legacy feature
console.log(internetName.substr(1,4)); //eviL
console.log(internetName.substr(2)); // will slice out rest of the string ---> o/p : viLinux
console.log(internetName.substr(-4)); // position counts from the end of the string ---> o/p : inux


// 4. Conerts to UPPERCASE 
console.log(internetName.toUpperCase());
// 5. Converts to lowercase
console.log(internetName.toLowerCase());

// 6. concatenation of two strings 
let intro = "Hello";
let name = "Aarohi";
console.log(intro.concat(" ", name)); // Hello Aarohi

// 7. trim() : removes whitespaces from the string

let intial = "     Hello World    ";
console.log(intial.trim());  // Hello World

// 8. trimStart() : ECMASCRIPT 2019 ; String method that works like trim() but removes whitespaces only from the start of the String
console.log(intial.trimStart());  // Hello World
//Similarily ,  9. trimEnd() removes WhiteSpace only from the end of a String


//10. String Padding : To support padding at the begininng and at athe end of a string (ES2017 Feature)

// 10.1 padStart() : pads a string from the start , with another string until it reaches the given Length

let number = "9";
console.log(number.padStart(4,"0")); //0009

// 10.2 padEnd() : pads a string from th end 

console.log(number.padEnd(4,"0")); //9000

// if it's a number then convert it into string to use padStart() or padEnd() method

// 11. String Repeat() : Returns String with multiple copies  of a String ES6 --> 2015 Feature
//Always new String : As, Strings are immutable and it doesnot change the original String

console.log(intial.repeat(4)); // Hello World         Hello World         Hello World         Hello World  

// 12. replaceAll() : 2021 Feature ; allows you to regular expression instead of a string to be replaced

let text = "I love Cats. Cats are very easy to love. Cats are very popular."
console.log(text.replaceAll("Cats", "Dogs")); // I love Dogs. Dogs are very easy to love. Dogs are very popular.
console.log(text.replaceAll(/Cats/g,"Dogs")); // I love Dogs. Dogs are very easy to love. Dogs are very popular.


// 13. String Split : String can be converted to an array with split() method
let alpha = "a,b,c,d,e,f,g,h"
console.log(alpha.split(","))  // Split on commas 
/* output be like [a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h'
  ] */
  
  // If the separator is omitted, the returned array will contain the whole string in index [0].
  console.log(typeof alpha) // String
 let splittedAlpha = alpha.split(); //[ 'a,b,c,d,e,f,g,h' ]
  console.log(typeof splittedAlpha);  // object

  // If the seperator is "", returns an array of single characters

  console.log(alpha.split(""));
/* [
  'a', ',', 'b', ',',
  'c', ',', 'd', ',',
  'e', ',', 'f', ',',
  'g', ',', 'h'
] */




// 14. String Search Methods

// 14.1 String indexOf() : returns the index(position) of th efirst occurence of a string in a string, or it returns -1 if the string is not found
console.log(text.indexOf("Cats")); // 7

// 14.2 lastIndexOf() : returns the index of the last occurence of a specified text in a string
console.log(text.lastIndexOf("love")); // 35 
console.log(text.lastIndexOf("love", 15)); // searches from backward (from the end to the begining ) , if second parameter is 15 , search starts at position 15 and searches to the begining of the string
//o/p :- 2

// 14.3 search() : searches a string (or a regular expression) and returns the position of the match
console.log(text.search(/love/)); //2

// indexOf() : Cannot take powerful search values (regular expressions)
// search() : cannot take a second start position argument

// 14.4 match() : Returns an array containing the results of matching string aganist a string ( or a reg exp )

console.log(text.match(/cat/gi)); // performs global , case-insensitive search for cat ; o/p : [ 'Cat', 'Cat', 'Cat' ]

// If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

// 14.5 matchAll() : ES2020 Feature ; returns an iterator containing the results of matching a string against a string (or a regular expression)

console.log(text.matchAll(/Cats/gi)); // ?

// 14.6 includes() : Returns true , if a string contains a specified value ; otherwise it returns false. ES6 Feature

console.log(text.includes("cat")); // false
console.log(text.includes("Cats")); // true
console.log(text.includes("Cats",12)); // true


// 14.7 startsWith() : Returns true if a string begins with a specified value; Otherwise it returns false

console.log(text.startsWith("love", 2)); // true ; it starts from a position leaing "I " ; ES6 Feature

// 14.8 endsWith() : returns true if a string ends with a specified value , otherwise false; ES6 Feature

console.log(text.endsWith("popular.")) // true












