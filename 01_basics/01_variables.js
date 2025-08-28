const accountId = 1234;
let accountEmail = "Yasin@google.com";
var accountPassword = "32334";
accountCity = "Lahore";   //Not recommended completey avoid it

let accountState; // prints the value undefined
// accountId = 2;  NOT Allowed
accountEmail =  "yk@yk.com"
accountPassword = "2323";
accountCity = "Islamabad";
console.log(accountId);


/* 
Perfer Not to use var.
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
