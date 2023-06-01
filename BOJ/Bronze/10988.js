const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let arr = input[0].split("");
let arr_reverse = [...arr].reverse();
if (arr.join("") == arr_reverse.join("")) console.log("1");
else console.log("0");
