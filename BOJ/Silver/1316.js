const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString().trim(); //제출

input = input.split("\n");

let n = Number(input[0]);
let arr = input.slice(1).map((a) => a.split(""));

let cnt = 0;
arr.forEach((word) => {
  let stack = [word[0]];
  let is_group = true;

  for (let i = 1; i < word.length; i++) {
    if (word[i - 1] == word[i]) continue;
    else if (stack.includes(word[i]) == true) {
      is_group = false;
      break;
    } else stack.push(word[i]);
  }
  if (is_group == true) cnt++;
});

console.log(cnt);
