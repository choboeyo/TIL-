function solution(k, m, score) {
  // k = 사과의 최대 점수
  // m = 한 상자에 들어가는 사과의 수
  // score = 사과들의 점수
  //최저 사과점수 X 한 상자에 담긴 사과 개수 X 상자의 개수
  let sortScore = score.sort((a, b) => b - a);
  let result = [];
  for (let i = 0; i < score.length; i += m) {
    let sliceScore = sortScore.slice(i, m + i);
    if (sliceScore.length === m) {
      result.push(Math.min(...sliceScore) * m);
    }
  }

  return result.reduce((a, c) => a + c, 0);
}
