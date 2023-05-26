const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = input.map((a) => Number(a));

function solution(n) {
  console.log(Math.max(...n));
  console.log(n.indexOf(Math.max(...n)) + 1);
}

solution(n);
