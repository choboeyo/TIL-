// 처음 코드 시간 복잡도가 너무 높게 나옴.

// function solution(topping) {
//  let count = 0;
//     for(let i = 0; i < topping.length; i++)  {
//         let topping1 = new Set(topping.slice(0, i)).size;
//         let topping2 = new Set(topping.slice(i)).size;
//         if(topping1 === topping2) {
//             count ++;
//         }
//     }
//     return count;
// }

function solution(topping) {
  const a = new Set();
  const b = {};

  let answer = 0;
  let check = 0;

  for (let i = 0; i < topping.length; i++) {
    if (b[topping[i]]) {
      b[topping[i]]++;
    } else {
      b[topping[i]] = 1;
      check++;
    }
  }

  for (let i = 0; i < topping.length; i++) {
    a.add(topping[i]);
    b[topping[i]]--;
    if (!b[topping[i]]) check--;
    if (a.size === check) answer++;
  }
  return answer;
}
