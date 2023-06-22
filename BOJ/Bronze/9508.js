const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출
input = input.split("\n").map(Number);
input.pop();

console.log(
  input
    .map(function solution(num) {
      const divisor = [1]; // 약수에 항상 1이 있으므로

      for (let i = 2; i < num; i++) {
        if (num % i === 0) divisor.push(i); // 약수 i
      }
      if (divisor.reduce((acc, cur) => acc + cur, 0) === num)
        return `${num} = ` + divisor.join(" + ");
      else return `${num} is NOT perfect.`;
    })
    .join("\n")
);
