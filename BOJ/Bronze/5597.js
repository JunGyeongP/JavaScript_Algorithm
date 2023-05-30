const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n").map(Number);

let i = 1;

while (i <= 30) {
  if (!input.includes(i)) console.log(i);
  i++;
}
