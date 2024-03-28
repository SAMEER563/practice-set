const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[1][2]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]


// console.log(all_new_heros);

const another_arr = [1, 2, 3, [4, 5,[6,7,8]]]

const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr);

// console.log(Array.isArray("Sameer"));
// console.log(Array.from("Sameer"));

let score1 = 100
let score2 = 500
let score3 = 400

console.log(Array.of(score1, score2, score3));