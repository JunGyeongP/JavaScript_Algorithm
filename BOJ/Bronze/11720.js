const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);
let str = input[1].split("").map(Number);
let sum = str.reduce((b, a) => a + b);
console.log(sum);
