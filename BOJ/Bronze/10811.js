const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString(); //test
// let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);

let rever = input.slice(1).map((a) => a.split(" ").map(Number));
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}
for (let i = 0; i < m; i++) {
  let arr_cpy = arr.slice(rever[i][0] - 1, rever[i][1]).reverse();
  for (let j = 0; j < arr_cpy.length; j++) {
    arr[j + rever[i][0] - 1] = arr_cpy[j];
  }
}
console.log(arr.join(" "));
