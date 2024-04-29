// for of

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}


const greeting = "Hello World!";
for (const greet of greeting) {
    console.log(`Letter: ${greet}`);
    
}

// Map

const myMap = new Map();
myMap.set("IN", "India");
myMap.set("US", "United States");
myMap.set("UK", "United Kingdom");

// console.log(myMap);

for (const [key,value] of myMap) {
    // console.log(key, ":=", value);
}

const myObject = {
    game1: 'Cricket',
    game2: 'Football',

}

for (const [key, value] of myObject) {
    console.log(key, ":=" , value);
}