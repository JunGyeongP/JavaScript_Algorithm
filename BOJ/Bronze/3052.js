const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n", 10).map((a) => Number(a) % 42);

let obj = new Set(input);

console.log(obj.size);
