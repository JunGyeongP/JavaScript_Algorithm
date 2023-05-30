const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let m = Number(input[0].split(" ")[1]);
let n = Number(input[0].split(" ")[0]);
let bucket = new Array(n).fill(0);
let arr = input.slice(1).map((a) => a.split(" ").map((a) => parseInt(a)));

for (let i = 0; i < m; i++) {
  for (let j = arr[i][0] - 1; j < arr[i][1]; j++) {
    bucket[j] = arr[i][2];
  }
}

console.log(bucket.join(" "));
