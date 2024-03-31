// const userEmail = ""

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email ");
// }


// Falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 



// Truthy values
// "0", true, "false", " ", [], {}, function(){} 


// check empty array
if (userEmail.length === 0) {
    console.log("Empty Array");
}

// check empty object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 4 ?? 12
// val1 = null ?? 14
val1 = undefined ?? 12

console.log(val1);


// Ternary opertor

// condition ? true : false

const coffeePrice = 120
coffeePrice <= 80 ? console.log("less than 80") : console.log("more than 80");