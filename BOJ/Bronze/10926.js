const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
n = input[0];

function solution(n) {
  return n + "??!";
}

console.log(solution(n));
