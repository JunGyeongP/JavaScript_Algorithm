const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let num = Number(input[0].split(" ")[1]);

let arr = input[1]
  .split(" ")
  .map(Number)
  .filter((a) => a < num);

console.log(arr.join(" "));
