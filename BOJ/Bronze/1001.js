const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = input[0].split(" ");
n = n.map((a) => Number(a));

function solution(a, b) {
  return a - b;
}

console.log(solution(n[0], n[1]));
