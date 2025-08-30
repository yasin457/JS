"use strict"; // treat all JS code in newer versoin of JavaScript


// alert(9 + 12);  // we are using node js not browser

// console.log("Yasin"); console.log("Khan");   // Code readablity  is more improtant  for example line 10 and 11
/* console.log(3+
    3);             // Code is not read able
*/
console.log("Yasin"); 
console.log("Khan");    // line not  10 and 11 are more readable then lin no 6 , 7 and 9


let name = "Yasin";     // string
let age = 20;       // number
let isLoggedIn = false;     // boolean

let state;  // undefined
let temprature = null; // we have to send no response from server if we send 0 then its a temprature


/**
 * Data types in JavaScript include:
 * 
 * 1. Primitive Types:
 *    - string: Represents textual data (e.g., "hello").
 *    - number: Represents both integer and floating-point numbers (e.g., 42, 3.14). Number also   have a range as (+2 and -2 ^53 -1 )
 *    - boolean: Represents logical entities (true or false).
 *    - undefined: Indicates a variable that has not been assigned a value.
 *    - null: Represents the intentional absence of any object value.
 *    - symbol: Represents a unique and immutable value (introduced in ES6).
 *    - bigint: Represents integers with arbitrary precision (introduced in ES2020).
 * 
 * 2. Object Types:
 *    - object: Used to store collections of data and more complex entities (e.g., arrays, functions, dates, etc.).
 */

console.log(typeof null); // object  // may be language error but need to remember its an object
console.log(typeof undefined);  // undefined
console.log(typeof name);   // string
console.log(typeof age);   // number
console.log(typeof isLoggedIn);   // boolean

//




/*
 * 📚 Recommended Documentation Resources
 *
 * 1. MDN Web Docs by Mozilla: https://developer.mozilla.org/en-US/docs/Web/JavaScript  
 *    MDN is the go-to resource for learning and referencing JavaScript. 
 *    Most web developers rely on it for accurate, up-to-date documentation 
 *    that aligns closely with real-world browser behavior.
 *
 * 2. ECMAScript Specification: https://tc39.es/ecma262/  
 *    The official ECMAScript specification defines how JavaScript works at its core.  
 *    While MDN is great for practical development, the ECMAScript docs are essential 
 *    for understanding the language at an engine level. They’re especially useful for 
 *    those building compilers, browsers, or JavaScript engines.
 */
