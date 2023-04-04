function solution(k, score) {
  let answer = [];
  let result = [];
  for (let i = 0; i < score.length; i++) {
    if (answer.length === k) {
      if (score[i] < answer[answer.length - 1]) {
        answer = answer;
      } else {
        answer.pop();
        answer.push(score[i]);
      }
    } else {
      answer.push(score[i]);
    }
    answer.sort((a, b) => b - a);
    result.push(answer[answer.length - 1]);
  }
  return result;
}

// 원래 코드가 왜더 빠를까?

// function solution(k, score) {
//     const answer = [];
//     const result = [];

//     for(let i = 0; i < score.length; i++) {
//         result.push(score[i]);
//         result.sort((a, b) => b - a);

//         if(result.length >= k) answer.push(result[k - 1]);
//         else answer.push(result[result.length - 1]);
//     }

//     return answer;
// }
