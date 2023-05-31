const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let arr = input[0]
  .split(" ")
  .map((a) => a.split("").reverse().join(""))
  .map(Number);
console.log(Math.max(...arr));
