// singleton 



// object literal

// use symbol as a key
const mySym = Symbol("key1")


// const User = {
//     name: "Sameer",
//     // if we declare as string then we access this by using 2nd 
//     "fullName": "Sameer kumar maurya",
//     [mySym]: "mykey1",  //declare symbol
//     age: 23,
//     location: "Lucknow",
//     email:"sam@gmail.com",
//     isLoggedIn: true,
//     lastLoginDays: ["Monday", "Saturday"]
// }


// two types to access object
// 1st type
// console.log(User.name);

// 2nd type
// console.log(User["location"]);
// console.log(User["fullName"]);
// console.log(User[mySym]);        // we can access symbol without using string

// to override the value

User.email = "abk@gmail.com"
// console.log(User["email"]);

// to freeze the value
// Object.freeze(User)
User.email = "ask@google.com"
// console.log(User);

User.gretting = function(){
    console.log("Hello handsome..");
}

User.grettingTwo = function(){
    console.log(`Hello handsome.., ${this.name}`);
}

console.log(User.gretting());
console.log(User.grettingTwo());