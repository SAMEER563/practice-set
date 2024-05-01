// const coding = ["js", "py", "rb", "ts"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// });

// console.log(values); // undefined


const myNums = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 5);
console.log(newNums);



// const newNums = myNums.filter((num) => {
//     return num > 5;
// });
// console.log(newNums);



// const newNums = []
// myNums.forEach((num) => {
//     if (num > 5) {
//         newNums.push(num);
//     }
// });

console.log(newNums);


const books = [
    {
        title: "The Alchemist", genre: "Fiction", pages: 208, author: "Paulo Coelho" },
    {
        title: "The Power of Now", genre: "Self-help", pages: 236, author: "Eckhart Tolle" },
    {
        title: "The Art of War", genre: "Strategy", pages: 273, author: "Sun Tzu" },
    {
        title: "The 48 Laws of Power", genre: "Strategy", pages: 452, author: "Robert Greene" },
    {
        title: "The Lean Startup", genre: "Business", pages: 336, author: "Eric Ries" },
    {  
        title: "The Four Agreements", genre: "Self-help", pages: 168, author: "Don Miguel Ruiz" },
    {
        title: "The 7 Habits of Highly Effective People", genre: "Self-help", pages: 381, author: "Stephen R. Covey" },
];

const userBooks = books.filter((book) => book.genre === "Strategy");


console.log(userBooks);