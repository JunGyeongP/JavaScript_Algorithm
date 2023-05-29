const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString(); //test
// let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

function solution(a, b) {
  b = b - 45;
  if (b < 0) {
    a--;
    b = 60 + b;
    if (a < 0) a = 23;
  }

  console.log(a, b);
}

solution(a, b);
