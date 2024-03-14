// Types of DataType

// Primitive

// This is 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.58

const loggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('126')
const anotherId = Symbol('126')

console.log(id === anotherId)

const bigNumber = 498976597264797n



// Reference ( Non Primitive )

// Array, Objects, Functions

const heros = ["shaktiman", "missileman", "batman"];
let myObj = {
    name: "sameer",
    age: 23,
}

const myFunction = function(){
    console.log("Hello Sam")
}

// it use to known datatype

console.log(typeof id)