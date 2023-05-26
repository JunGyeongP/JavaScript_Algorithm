const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);

function solution(n) {
  if ((n % 4 == 0 && n % 100 !== 0) || n % 400 == 0) return 1;
  else return 0;
}

console.log(solution(n));
