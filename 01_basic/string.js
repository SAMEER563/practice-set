const name = "sameer"
const repoCount = 50

// console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare string 

const gameName = new String("sameer-rock")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("e"));

// const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-9, 6)
console.log(anotherString);

const newStringOne = "    sudar   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sameer.com/sameer%45rockstar"
console.log(url.replace('%45', '_'))