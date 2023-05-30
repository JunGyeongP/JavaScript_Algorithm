const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let m = Number(input[0].split(" ")[1]);
let n = Number(input[0].split(" ")[0]);
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(i + 1);
}
let change_arr = input
  .slice(1)
  .map((a) => a.split(" ").map((a) => parseInt(a) - 1));

for (let i = 0; i < m; i++) {
  let temp = arr[change_arr[i][0]];
  arr[change_arr[i][0]] = arr[change_arr[i][1]];
  arr[change_arr[i][1]] = temp;
}

console.log(arr.join(" "));
