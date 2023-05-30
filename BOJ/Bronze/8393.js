const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);

let cnt = 0;
for (let i = 1; i <= n; i++) {
  cnt += i;
}

console.log(cnt);
