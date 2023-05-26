const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);

function solution(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

solution(n);
