const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString(); //test
// let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let total_price = Number(input[0]);
let n = Number(input[1]);
let arr = input.slice(2);
arr = arr.map((a) => a.split(" "));

function solution(total_price, n, arr) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    cnt += Number(arr[i][0]) * Number(arr[i][1]);
  }
  if (cnt == total_price) return "Yes";
  else return "No";
}

console.log(solution(total_price, n, arr));
