function solution(n, k) {
  function isPrime(num) {
    if (num <= 1) {
      // 음수와 1은 소수가 아니다
      return false;
    }

    // 2는 짝수 중 유일한 소수이다
    if (num % 2 === 0) {
      return num === 2 ? true : false;
    }

    // 이제 num이 홀수 일때 다른 수에 나눠지는지 판별한다
    // Math.sqrt(num) 즉, √num까지 나눠 떨어지는지 검사한다

    const sqrt = parseInt(Math.sqrt(num));

    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (num % divider === 0) {
        return false;
      }
    }
    return true;
  }
  let answer = 0;
  let arr = n.toString(k).split("0");
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(Number(arr[i]))) {
      answer++;
    }
  }
  return answer;
}
