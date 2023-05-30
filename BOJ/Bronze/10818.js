const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let arr = input[1].split(" ").map(Number);
console.log(Math.min(...arr), Math.max(...arr));
