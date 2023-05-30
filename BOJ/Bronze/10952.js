const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let arr = input.map((a) => a.split(" ").map(Number));

function solution(arr) {
  let i = 0;
  while (true) {
    if (arr[i][0] == 0 && arr[i][1] == 0) break;
    console.log(arr[i][0] + arr[i][1]);
    i++;
  }
}

solution(arr);
