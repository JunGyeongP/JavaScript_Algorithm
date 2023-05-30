const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let find_c = Number(input[2]);
let arr = input[1]
  .split(" ")
  .map(Number)
  .filter((a) => a == find_c);

console.log(arr.length);
