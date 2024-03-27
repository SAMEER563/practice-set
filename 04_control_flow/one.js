// if statement

// const temperature = 42

// if ( temperature > 38 ) {
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }

// operators
// <, >, =, ==, ===, !=, !==, >=, <=



// const score = 452

// if (score >  214) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }


// when we use any console outside the scope variable and does not define the value ouside then 
// it give error  
// console.log(`User power: ${power}`);



// =========  short hand notation ========

const balance = 599

// if (balance > 421) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else {
//     console.log("greater than 750");
// }


// multiple condition check

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && loggedInFromGoogle) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}