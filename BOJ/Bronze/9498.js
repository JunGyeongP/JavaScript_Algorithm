const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);

function solution(n) {
  if (n >= 90 && n <= 100) return "A";
  else if (n >= 80 && n <= 89) return "B";
  else if (n >= 70 && n <= 79) return "C";
  else if (n >= 60 && n <= 69) return "D";
  else return "F";
}

console.log(solution(n));
