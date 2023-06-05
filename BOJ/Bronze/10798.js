const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출

input = input.split("\n");

let max_len = Math.max(...input.map((a) => a.length));

let answer = "";
for (let i = 0; i < max_len; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] == undefined) continue;
    if (
      (input[j][i] >= "a" && input[j][i] <= "z") ||
      (input[j][i] >= "A" && input[j][i] <= "Z") ||
      (input[j][i] >= "0" && input[j][i] <= "9")
    )
      answer += input[j][i];
  }
}

console.log(answer.trim());
