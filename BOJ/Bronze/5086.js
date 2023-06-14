const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출
input = input.split("\n");

input.pop();
const nums = input.map((v) => v.split(" ").map((x) => +x));

nums.forEach((v) => {
  if (v[1] % v[0] == 0) console.log("factor");
  else if (v[0] % v[1] == 0) console.log("multiple");
  else console.log("neither");
});
