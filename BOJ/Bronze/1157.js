const fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString(); //test
let input = fs.readFileSync("/dev/stdin").toString(); //제출
input = input.split("\n");
let arr = input[0].toUpperCase().split("");
let abc = Array.from(new Set([...arr]));
let index = new Array(abc.length).fill(0);

arr.map((a) => index[abc.indexOf(a)]++);

let max_abc = Math.max(...index);

let max_arr = index.filter((a) => a == max_abc);
if (max_arr.length > 1) console.log("?");
else console.log(abc[index.indexOf(max_abc)]);
