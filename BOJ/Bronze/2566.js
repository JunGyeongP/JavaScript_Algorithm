const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출

input = input.split("\n").map((a) => a.split(" ").map(Number));

let max_num = Math.max(...input.map((a) => Math.max(...a)));
console.log(max_num);
for (let i = 0; i < input.length; i++) {
  if (input[i].includes(max_num)) {
    console.log(i + 1, input[i].indexOf(max_num) + 1);
    break;
  }
}
