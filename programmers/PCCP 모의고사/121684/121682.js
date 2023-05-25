function solution(ability) {
  var answer = 0;
  let max_idx = ability[0].length;
  let visited = new Array(ability.length).fill(false);

  function dfs(sum, visited, idx) {
    if (idx == max_idx)
      if (answer < sum) {
        answer = sum;
        return;
      }
    for (let i = 0; i < ability.length; i++) {
      let visited_1 = [...visited];
      if (visited_1[i] == false) {
        visited_1[i] = true;
        dfs(sum + ability[i][idx], visited_1, idx + 1);
      }
    }
  }
  dfs(0, visited, 0);
  return answer;
}
