const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let arr = input[0].split(" ").map(Number);
let ches = [1, 1, 2, 2, 2, 8];
ches = ches.map((a, i) => ches[i] - arr[i]);
console.log(ches.join(" "));
