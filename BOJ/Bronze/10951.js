const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString().trim(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출
input = input.split("\n");

let arr = input.map((a) => a.split(" ").map(Number));

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0] + arr[i][1]);
  }
}

solution(arr);
