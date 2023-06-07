const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n").map((a) => a.split(" "));

let str = Number(input[0][0]);
let n = Number(input[0][1]);
console.log(str.toString(n).toUpperCase());
