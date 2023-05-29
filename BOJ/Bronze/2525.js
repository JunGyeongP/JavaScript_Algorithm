const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let time = input[0].split(" ");

let a = Number(time[0]);
let b = Number(time[1]);

let timer = Number(input[1]);

function solution(a, b, timner) {
  let plus_h = parseInt(timer / 60);
  let plus_m = timer % 60;

  a = a + plus_h;
  b = b + plus_m;
  if (b >= 60) {
    a = a + parseInt(b / 60);
    b = b % 60;
  }
  if (a >= 24) a = a % 24;

  console.log(a, b);
}

solution(a, b);
