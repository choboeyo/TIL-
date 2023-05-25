function solution(A, B) {
  let answer = 0;
  let ASort = A.sort((a, b) => a - b);
  let BSort = B.sort((a, b) => b - a);

  // for(let i = 0; i < ASort.length; i ++) {
  //     answer += ASort[i] * BSort[i]
  // }
  // return answer
  return ASort.reduce((ac, cu, idx) => ac + cu * BSort[idx], 0);
}
