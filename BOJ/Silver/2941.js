const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

input = input.split("\n");

let arr = input[0].trim();
for (let x of croatia) {
  arr = arr.replaceAll(x, "x");
}

console.log(arr.length);
