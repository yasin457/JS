
// Primitive Data Types

//  7 types;    String, Number, Boolean, null, undefined,Symbol, BigInt, 




// Is JavaScript a dynamically typed or statically typed language? Explain your answer with examples.

const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolean

const outsideTemp = null; // null

let userEmail; // undefined

const id = Symbol("123"); // Symbol

const anotherId = Symbol("123"); // Symbol

// console.log(id === anotherId); // false

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// Reference (Non primitive)

// Arrays, Objects, Functions, 


const heros = ["Shaktiman", "Naagraj", "Doga", "Bhokal"]; // Array

const myObj = {
  name: "Yasin",
  age: 22,
  isLoggedIn: false,
}; // Object

const myFunction = function () {
    console.log("Hello World!");
    
}

// console.log(typeof bigNumber);


// Object (native and does not implement [[Call]]) → "object"
typeof {};        // "object"
typeof [];        // "object" (array bhi object hai)
typeof new Date(); // "object"




// Object (native or host and does implement [[Call]]) → "function"

function greet() {}
typeof greet; // "function"

const sayHi = () => {};
typeof sayHi; // "function"



// Object (host and does not implement [[Call]]) → Implementation-defined

typeof document; // "object"
typeof alert;    // "function" (Because its Callable)



// +++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "yasinkhan"


let anothername = myYoutubename;
anothername = "yasindev"
// console.log(myYoutubename);
// console.log(anothername);


let userOne = {
  email: "user@google.com",
  payment: "user@jazzcash"
}


let userTwo = userOne

userTwo.email = "user@yaho.com"


console.log(userOne.email);
console.log(userTwo.email);