function solution(n) {
  var answer = new Array(n).fill([]);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = new Array(n).fill(0);
  }
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let cnt = 1;

  let nx = 0;
  let ny = 0;
  let path = 0;
  while (cnt <= n * n) {
    answer[ny][nx] = cnt;
    if (
      nx + dx[path] > n - 1 ||
      ny + dy[path] > n - 1 ||
      nx + dx[path] < 0 ||
      ny + dy[path] < 0 ||
      answer[ny + dy[path]][nx + dx[path]] !== 0
    ) {
      if (path == 3) path = 0;
      else path++;
    }

    nx += dx[path];
    ny += dy[path];
    cnt++;
  }
  return answer;
}
