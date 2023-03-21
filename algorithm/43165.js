// function solution(numbers, target) {
//     var answer = 0;
//      let arr = [];

//     function recursive(n) {
//         let copy = JSON.parse(JSON.stringify(numbers));
//         arr.push(copy);
//         if(n === numbers.length) {
//             return arr;
//         }
//         for(let i = n; i < numbers.length; i ++) {
//             for(let j = i; j <  numbers.length; j ++) {
//              copy[j] = - copy[j];
//                 arr.push([...copy]);

//             }
//          }
//           return recursive(n + 1);
//     }

//     let hi = recursive(0);
//     let set = new Set(hi.map(JSON.stringify));
//     const uniqArr = Array.from(set).map(JSON.parse);

//     return uniqArr.map(el => el.reduce((ac,cu) => ac + cu , 0)).filter(el => el === target).length;
// }

function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;
  DFS(0, 0);

  function DFS(count, sum) {
    console.log(count, sum);
    if (count === length) {
      if (sum === target) {
        answer++;
      }
    } else {
      DFS(count + 1, sum + numbers[count]); // 1, 4 // 2, 5 // 3, 7 // 4, 8 // 4, 4
      DFS(count + 1, sum - numbers[count]); // 4, 6 // 3, 3 // 4, 2 // 2, 3 //
      // 4 + 1 + 2 + 1
      // 4 + 1 - 2 + 1
    }
  }

  return answer;
}

// const arr = [1, 1, 1, 1, 1];
// const target = 3;
