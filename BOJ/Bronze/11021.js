const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let n = Number(input[0]);
let arr = input.slice(1).map((a) => a.split(" ").map(Number));

function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    console.log(`Case #${i + 1}: ${arr[i][0] + arr[i][1]}`);
  }
}

solution(n, arr);
