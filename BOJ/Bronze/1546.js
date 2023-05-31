const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let m = Math.max(...arr);
arr = arr.map((a) => (a / m) * 100);
let sum = arr.reduce((b, a) => a + b);
console.log(sum / n);
