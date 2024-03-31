const user = {
    username: "sameer",
    price: 152,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        //  console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

function coffee() {
    let username = "sameer"
    console.log(this);
}

coffee()

// const coffee = function () {
//     let username = "sameer"
//     console.log(this.username);
// }

// coffee()

const coffee =  () => {
    let username = "sameer"
    console.log(this.username);
}

coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) =>( num1 + num2 )


const addTwo = (num1, num2) => ({username: "sameer"})

console.log(addTwo(3, 4));

// const myArray = [2, 4, 8, 5, 4]


// myArray.forEach(() => {})
