const coding = ["js", "py", "rb", "ts"];

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function print(item) {
//     console.log(item);
// }

// coding.forEach(print);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [ 
    {
        languageName: "JavaScript",
        languageType: "Dynamic",
        languageFileName: ".js"
    },
    {
        languageName: "Python",
        languageType: "Dynamic",
        languageFileName: ".py"
    },
    {
        languageName: "Ruby",
        languageType: "Dynamic",
        languageFileName: ".rb"
    },
    {
        languageName: "TypeScript",
        languageType: "Static",
        languageFileName: ".ts"
    },

];

myCoding.forEach((item) => {
    console.log(item.languageFileName);
} )