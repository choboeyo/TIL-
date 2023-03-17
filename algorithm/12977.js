// function isPrime(num) {
//   // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
//   // num > i
//   for(let i = 2; i < num; i++) {
//   if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
//     return false;
//    }
//   }
//  // 소수는 1보다 큰 정수임으로
//  // 1보다 작으면 false를 리턴한다
//  return true;
// }




// // Math.sqrt로 짝수는 검사를 안하기때문에 훨씬 효율적인 코드라고 할 수 있다.

function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i 
    
      if(num % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(num); i+=2) {
    if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
     }
    }
   return true;
  }
  
  
  function solution(nums) {
      let answer = 0;
      for(let i = 0; i < nums.length - 2; i ++)  {
          for(let j = i + 1; j < nums.length - 1; j ++)  {
              for(let k = j + 1; k < nums.length; k ++) {
                  let sum = nums[i] + nums[j] + nums[k];
                  if(isPrime(sum)) answer ++;    
              }
          }
      }
      return answer;
  }