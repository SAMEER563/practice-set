
// global scope

let a = 450

// block scope 
if (true) {
let a = 10
const b = 20
var c = 30
// console.log("Inside :", a);
}


// console.log(a)
// console.log(b);
// console.log(c);



function one () {
    const username = "sameer"

    function two () {
        const website = "gyanget"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "sameer"
    if (username === "sameer") {
        const website = "gyanget"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);
// ================ interesting =================

function addone(num) {
    return num + 1
}
addTwo(5)

const addTwo = function(num) {
    return num + 2
}

