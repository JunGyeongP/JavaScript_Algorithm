const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let n = input[0];
let arr = input.slice(1).map((a) => a.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  let m = arr[i][0];
  let num = arr[i].slice(1);

  let avg = num.reduce((b, a) => a + b) / m;
  num = num.filter((a) => a > avg);
  let answer = ((num.length / m) * 100).toFixed(3);
  console.log(`${answer}%`);
}
