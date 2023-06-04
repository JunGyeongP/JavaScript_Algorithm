const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출

input = input.split("\n").map((a) => a.split(" "));

let grade = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"];
let score = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0];

let cnt = 0;
let cnt_len = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i][2] == "P") continue;

  if (grade.includes(input[i][2]))
    cnt += score[grade.indexOf(input[i][2])] * Number(input[i][1]);

  cnt_len += Number(input[i][1]);
}

console.log((cnt / cnt_len).toFixed(6));
