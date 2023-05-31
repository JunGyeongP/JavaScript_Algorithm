const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");

let arr = input[0].split("");
let dial = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let answer = "";
for (let i = 0; i < arr.length; i++) {
  dial.map((a, idx) => {
    if (a.includes(arr[i])) answer += idx;
  });
}

answer = answer.split("").map((a) => Number(a));
let cnt = 0;
for (let i = 0; i < answer.length; i++) {
  cnt += answer[i] + 1;
}
console.log(cnt);
