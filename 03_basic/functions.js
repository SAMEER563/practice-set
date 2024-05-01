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

// function addTwoNumber (number1, number2){
//    let result = number1 + number2
//    return result
//    return number1 + number2
// }
// const result = addTwoNumber(4, 8)

// console.log("Result:", result);


// function loginUserMesssage(username){
//     if(username === undefined){
//         or

//         if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// }

// console.log(loginUserMesssage("Sameer"))
// console.log(loginUserMesssage());

function calculateCardPrice(...num1) {  // use of rest operator (...)
    return num1
}
// console.log(calculateCardPrice(2, 5, 6));

const user = {
    username: "sameer",
    prices: 152
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 452
})

const myNewArray = [200, 450, 897]

function returnSecondValue(getNewArray) {
    return getNewArray[2]
}

// console.log(returnSecondValue(myNewArray));

