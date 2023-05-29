const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let a = Number(input[0]);
let b = Number(input[1]);

function solution(a, b) {
  if (a > 0 && b > 0) return 1;
  else if (a > 0 && b < 0) return 4;
  else if (a < 0 && b > 0) return 2;
  else return 3;
}

console.log(solution(a, b));
