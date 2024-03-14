// ************************ Heap & Stack ******************

// Stack ( Primitive )
// Heap ( Non-Primitive)

let myInsta = "samshakya78"

let anotherName = myInsta
anotherName = "rockstarsam"

console.log(myInsta)
console.log(anotherName)

let userOne = {
    email: "sam@gmail.com",
    upi: "ak@yapl",
}

let userTwo = userOne

userTwo.email = "ak@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

// we learn that if we pass the value from stack it takes the value from reference copy 
// but we pass the value from heap it takes the value from same reference 