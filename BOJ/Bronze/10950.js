const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  input[i] = input[i].split(" ");
  console.log(Number(input[i][0]) + Number(input[i][1]));
}
