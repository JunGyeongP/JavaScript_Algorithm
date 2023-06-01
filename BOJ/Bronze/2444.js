const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let n = Number(input[0]);
for (let i = 1; i < n; i++) {
  console.log(`${" ".repeat(n - i)}${"*".repeat(2 * i - 1)}`);
}
console.log("*".repeat(2 * n - 1));
for (let i = 1; i < n; i++) {
  console.log(`${" ".repeat(i)}${"*".repeat(2 * (n - i) - 1)}`);
}
