const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString(); //test
// let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출
input = input.split("\n").map(Number);

let n = input[0];

let arr = input.slice(1);
let coin = [25, 10, 5, 1];

for (let i = 0; i < arr.length; i++) {
  let answer = new Array(4).fill(0);
  for (let j = 0; j < coin.length; j++) {
    if (arr[i] == 0) {
      answer[j] = 0;
      continue;
    }
    let cnt = Math.floor(arr[i] / coin[j]);
    answer[j] = cnt;
    arr[i] = arr[i] % coin[j];
  }

  console.log(answer.join(" "));
}
