function solution(numer1, denom1, numer2, denom2) {
  // 분모 = numer1
  // 분자 =  denom1
  // 4 / 8  + 6 / 8  =  10 / 8

  // 분자는 denom1  * denom2
  // 분모는 denom1 * numer2 + denom2 * numer1
  const bunmo = denom1 * denom2;
  const bunja = denom1 * numer2 + denom2 * numer1;

  // var answer = [];
  // console.log(gcd(bunmo, bunja)) // 최대 공약수를 찾는다.

  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  let gcdResult = gcd(bunmo, bunja);
  return [bunja / gcdResult, bunmo / gcdResult];
}
