function solution(targets) {
  let sortTarget = targets.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let nowE = targets[0][1];
  for (let i = 0; i < targets.length; i++) {
    // e가 x보다 작을때 격추
    if (nowE <= targets[i][0]) {
      nowE = targets[i][1];
      count++;
    }
  }
  return count + 1;
}
