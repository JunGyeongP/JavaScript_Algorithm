const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출

input = input.split("\n");

let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);

let arr1 = input.slice(1, 1 + n).map((a) => a.split(" ").map(Number));
let arr2 = input.slice(n + 1).map((a) => a.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arr1[i][j] += arr2[i][j];
  }
}

arr1.map((a) => console.log(a.join(" ")));
