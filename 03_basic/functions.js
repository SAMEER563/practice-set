// function declaration 

function sayName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("R");
}

// sayName()

// function addTwoNumber (number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber (number1, number2){
//    let result = number1 + number2
//    return result
   return number1 + number2
}
const result = addTwoNumber(4, 8)

// console.log("Result:", result);


function loginUserMesssage(username){
    // if(username === undefined){
        // or

        if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMesssage("Sameer"))
console.log(loginUserMesssage());