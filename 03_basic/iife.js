// Immediately Invoked Function Expression (IIFE) 

// function coffee() {
//     console.log(`DB CONNECTED`);
// }

// coffee()

(function coffee() {
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('sameer');