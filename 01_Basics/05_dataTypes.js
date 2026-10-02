// /*

// JavaScript is a dynamically typed language.

// Primitive Data Type :>

//     ⤷ String
//     ⤷ Number
//     ⤷ Boolean
//     ⤷ Null
//     ⤷ Undefined
//     ⤷ Symbol
//     ⤷ BigInt

// Non-primitive Data Type :>

//     ⤷ Object
//     ⤷ Array
//     ⤷ Function

// */


// // ==================================================
// // PRIMITIVE DATA TYPES
// // ==================================================

// // 1. String
// let name = "JD";
// console.log(typeof name);              // "string"


// // 2. Number
// let age = 20;
// let price = 99.99;
// console.log(typeof age);               // "number"


// // 3. Boolean
// let isLoggedIn = true;
// console.log(typeof isLoggedIn);        // "boolean"


// // 4. Null
// let temperature = null;
// console.log(typeof temperature);       // "object" ⚠️


// // 5. Undefined
// let score;
// console.log(typeof score);             // "undefined"


// // 6. Symbol
// let id = Symbol("id");
// console.log(typeof id);                // "symbol"


// // 7. BigInt
// let bigNumber = 12345678901234567890n;
// console.log(typeof bigNumber);         // "bigint"



// // ==================================================
// // NON-PRIMITIVE DATA TYPES
// // ==================================================

// // 1. Object
// let user = {
//     name: "JD",
//     age: 20
// };

// console.log(typeof user);              // "object"


// // 2. Array
// let numbers = [10, 20, 30];

// console.log(typeof numbers);           // "object"

// console.log(Array.isArray(numbers));   // true


// // 3. Function
// function greet() {
//     console.log("Hello JD");
// }

// console.log(typeof greet);             // "function"



// // ==================================================
// // IMPORTANT typeof EXAMPLES
// // ==================================================

// console.log(typeof "JD");              // "string"
// console.log(typeof 20);                // "number"
// console.log(typeof true);              // "boolean"
// console.log(typeof null);              // "object" ⚠️
// console.log(typeof undefined);         // "undefined"
// console.log(typeof Symbol("id"));      // "symbol"
// console.log(typeof 100n);              // "bigint"

// console.log(typeof {});                // "object"
// console.log(typeof []);                // "object"
// console.log(typeof function() {});     // "function"




// __________________________________________________________________________________________
// __________________________________________________________________________________________


// Stack(Primitive) and HTMLTableCaptionElement(Non-Primitive)

// In Primitive 

// let theycallme = "JD"
// let myanothername = theycallme
// myanothername = "Jay Dev Das"

// console.log(theycallme)
// console.log(myanothername)

// In Non-Primitive 

let user1 = {
    name : "Rahul",
    age : 21
}

let user2 = user1;

console.log(user1)
console.log(user2)

user2.name = "JD"

console.log("After swaping:")
console.log("USER1: ")
console.log(user1)
console.log("USER2: ")
console.log(user2)

// This happens because user1 and user2 are referring to the same object in memory.