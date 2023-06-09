const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
let N = parseInt(input);

let cnt = 1;

let idx = 1;
while (N > cnt) {
  cnt += 6 * idx;
  idx++;
}
console.log(idx);
