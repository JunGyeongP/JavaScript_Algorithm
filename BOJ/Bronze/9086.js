const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);
input.slice(1, 1 + n).map((a) => {
  let str = a[0] + a[a.length - 1];
  console.log(str);
});
