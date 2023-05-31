const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);
let arr = input.slice(1).map((a) => a.split(" "));

for (let i = 0; i < n; i++) {
  let answer = "";
  let repeat_num = Number(arr[i][0]);
  let str = arr[i][1];
  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(repeat_num);
  }
  console.log(answer);
}
