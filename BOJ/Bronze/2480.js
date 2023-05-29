const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split(" ").map(Number);

function solution(numbers) {
  let arr = new Array(6).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    arr[numbers[i] - 1]++;
  }
  let same_dice = Math.max(...arr);

  if (same_dice == 3) console.log(10000 + (arr.indexOf(same_dice) + 1) * 1000);
  else if (same_dice == 2)
    console.log(1000 + (arr.indexOf(same_dice) + 1) * 100);
  else console.log(Math.max(...numbers) * 100);
}

solution(input);
