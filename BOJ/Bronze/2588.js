const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

var a = Number(input[0]);
var b = Number(input[1]);

function solution(a, b) {
  console.log(parseInt(a * ((b % 100) % 10)));
  console.log(a * parseInt((b / 10) % 10));
  console.log(a * parseInt(b / 100));
  console.log(a * b);
}

solution(a, b);
