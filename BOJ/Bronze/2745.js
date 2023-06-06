const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let str = input[0].split(" ")[0];
let num = Number(input[0].split(" ")[1]);

let n = 1;
let answer = 0;
for (let i = str.length - 1; i >= 0; i--) {
  let toNum;
  if (str[i] >= "A" && str[i] <= "Z")
    toNum = str[i].charCodeAt() - "A".charCodeAt() + 10;
  else if (str[i] >= "0" && str[i] <= "9") toNum = Number(str[i]);

  answer += (toNum * n) % 1000000000;
  n = n * num;
}
console.log(answer);
