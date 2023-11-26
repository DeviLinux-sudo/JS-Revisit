// Basic Conversions

// console.log(2 > 1); // True
// console.log(2 >= 1); // True
// console.log(2 < 1); // False
// console.log(2 == 1); // False
// console.log(2 != 1); // True

// Problematic datatype conversions - Dataypes ain't same : shall be avoided

// console.log("2" > 1); // True
// console.log("02" > 1); // True

// console.log(null > 0); // False
// console.log(null == 0); // False
// console.log(null >= 0); // True

console.log(undefined == 0); // False
console.log(undefined > 0); // False
console.log(undefined < 0); // False

// == v/s ===

console.log("2" == 2); // True ; checks only value
console.log("2" === 2); // False ; checks value along with datatype