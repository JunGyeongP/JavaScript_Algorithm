const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split(" ");

var a = Number(input[0]);
var b = Number(input[1]);
var c = Number(input[2]);

function solution(a, b, c) {
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);
}

solution(a, b, c);
