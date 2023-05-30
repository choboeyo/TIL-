function solution(n) {
  let answer = 0;
  // for(let i = 1; i <= n; i++) {
  //     if(n % i === 0 && i % 2 === 1) {
  //         answer++;
  //     }
  // }

  for (let i = 1; i <= n / 2 + 1; i++) {
    let sum = i;
    for (let j = i + 1; j <= n / 2 + 1; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer + 1;
}
