const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
let N = parseInt(input);
let dot = 2;

for (let i = 0; i < N; i++) {
  dot += 2 ** i;
}

console.log(Math.pow(dot, 2));
