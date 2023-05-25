# 정수를 나선형으로 배치하기

<br><br>

## 문제설명

---

양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

<br>

## 제한사항

---

1 ≤ n ≤ 30
<br>

## 입출력 예

---

![](2023-05-24-00-16-27.png)

<br><br><br><br>

## 입출력 예 설명

---

![](2023-05-24-00-13-55.png)

<br><br>

## 접근 및 풀이

---

대학생 때 선배들한테 풀어보라고 추천받았던 달팽이 배열 문제와 유사하다는 생각이 들었다.
먼저 문제를 보면 ➡️ 방향으로 직진하다가 배열의 끝에 도달하면 ⬇️로 이동한다
이후 배열의 하단 끝에 도착하면 ⬅️로 이동하고 배열의 처음에 도달하면 ⬆️로 이동한다.

즉. 다음 위치가 배열의 크기 안에 있고 내가 방문하지 않았을 경우 방향을 전환하게 되고,
진행 방향은 ➡️⬇️⬅️⬆️을 계속해서 반복하게 된다.

<br><br>

## 제출한 코드

---

```js
function solution(n) {
  var answer = new Array(n).fill([]);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = new Array(n).fill(0);
  }

  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1]; //방향 전환을 위한 배열 dx, dy
  let cnt = 1;

  let nx = 0;
  let ny = 0; //최초 시작위치 (0,0)
  let path = 0; // 방향전환 0(오른쪽),1(아래),2(왼쪽),3(위)

  while (cnt <= n * n) {
    //순회를 마쳤을 경우 종료
    answer[ny][nx] = cnt;
    if (
      nx + dx[path] > n - 1 ||
      ny + dy[path] > n - 1 ||
      nx + dx[path] < 0 ||
      ny + dy[path] < 0 ||
      answer[ny + dy[path]][nx + dx[path]] !== 0
      // 다음 위치가 배열 사이즈를 오버하지 않고 방문하지 않았을 경우
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
```
