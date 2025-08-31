let score = 33  // it is confirm that score is a number 
let scoreA = "33"
let scoreB = "33bca"
let scoreC = null // 0
let scoreD = undefined  // NaN
let scoreE = true  //1
let scoreF = false // 0
let scoreG = "Yasin"  // NaN
// console.log(typeof score);
// console.log(typeof (score));
// console.log(typeof scoreA);
// console.log(typeof (scoreA));
// const {score} = req.body   // but here we donot know that score is number either a string.

let valueInNumber = Number(scoreA)
// console.log(typeof valueInNumber);
let valueInNumberB = Number(scoreB)
// console.log(valueInNumberB); // NaN
let valueInNumberC = Number(scoreC)
// console.log(valueInNumberC); // 0


//Conversion In JS
// "33" => 33
// "33bca" => NaN
// true => 1; false => 0
// 


let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
// let isLoggedIn = "Yasin"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 = false
// "" => false
// "Yasin" true



let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);



// ************************************ Operations  ************************************

let value = 3 
let negValue = -value
//console.log(angValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let greet = "Hello "
let name = "Yasin"

let greetSome = greet+name;

// console.log(greetSome);

// console.log("1" + 2); //12

// console.log(1 + "2"); //12

// console.log("1"+"2"); //12
// console.log("1" +2 + 2); //122
// console.log(2 + 2 + "1"); //41

// console.log("Yasin" - "a"); // NaN
// console.log("Yasin" * "a"); // NaN
// console.log("Yasin" / "a"); // NaN

// console.log("4" - "2");

// console.log(+true);
// console.log(true+);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2
// console.log(num1, num2, num3);

num1 += 2  // num1 = num1 + 2
// console.log(num1);

let gameCounter = 100;
gameCounter++  // gameCounter = gameCounter + 1
++gameCounter  // gameCounter = gameCounter + 1
// console.log(gameCounter);


// Link to Study More on conversion and operations
//https://tc39.es/ecma262/#sec-toprimitive
//https://tc39.es/ecma262/#sec-tonumber
