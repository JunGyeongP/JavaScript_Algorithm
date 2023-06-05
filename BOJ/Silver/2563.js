const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출

input = input.split("\n");

let n = Number(input[0]);
const paper = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

let arr = input.slice(1).map((a) => a.split(" ").map(Number));
for (let i = 0; i < n; i++) {
  let startX = arr[i][0]; // 3
  let startY = arr[i][1]; // 7
  for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
      if (paper[startX + l][startY + m] !== 0) continue;

      if (paper[startX + l][startY + m] === 0) {
        paper[startX + l][startY + m] = 1;
        count++;
      }
    }
  }
}
console.log(count);
