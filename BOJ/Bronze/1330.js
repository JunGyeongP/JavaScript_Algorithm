const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

function solution(a, b) {
  if (a < b) return "<";
  else if (a > b) return ">";
  else return "==";
}

console.log(solution(a, b));
