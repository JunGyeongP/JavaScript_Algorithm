const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let n = Number(input[0]);

function solution(n) {
  let repeat = parseInt(n / 4);
  let str = "";
  for (let i = 0; i < repeat; i++) {
    str += "long ";
  }
  str += "int";
  return str;
}

console.log(solution(n));