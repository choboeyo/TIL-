//시간 복잡도가 O(n^2
// function solution(sequence, k) {
//     let count = 0
//     if(sequence[0] === k)  {
//         return [0, 0]
//     }

//     function sumS (n, total) {
//         if(total > k || n > sequence.length + 1) {
//             return;
//         }
//         if(total === k) {
//             return n - 1;
//         }
//         total += sequence[n]
//         return sumS(n + 1, total);
//     }

//     let result = []
//     let short = 1000;
//     for(let i = 0; i < sequence.length; i ++) {
//         if(sumS(i, 0)) {
//             if(sumS(i, 0) - i < short) {
//                 short = sumS(i, 0) - i;
//                 result = [i, sumS(i, 0)]
//             }
//         // console.log("길이", sumS(i, 0) - i)
//         // console.log("시작인덱스", i)
//         // console.log("마지막인덱스", sumS(i, 0))
//         }
//     }

//     return result;
// }

//
function solution(sequence, k) {
  let startIndex = 0;
  let endIndex = 0;
  let sum = sequence[0];
  let result = null;

  while (startIndex <= endIndex && endIndex < sequence.length) {
    if (sum === k) {
      if (result === null || endIndex - startIndex < result[1] - result[0]) {
        result = [startIndex, endIndex];
      }
      sum -= sequence[startIndex];
      startIndex++;
    } else if (sum < k) {
      endIndex++;
      sum += sequence[endIndex];
    } else {
      sum -= sequence[startIndex];
      startIndex++;
    }
  }

  return result;
}
