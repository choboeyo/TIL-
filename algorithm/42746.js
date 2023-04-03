// function solution(numbers) {
//    let splitNumbers = numbers.map(el => String(el).split(''));
//    let sortNumbers = splitNumbers.sort((a,b) => b[0] - a[0]);

//     let dSort = sortNumbers.sort((a,b) => {
//         if(a[0] === b[0]) {
//             if(!b[1]) {
//                  b[1] = 1;
//                 }
//             return Number(b[1]) - Number(a[1]);
//         } else {
//             return b[0] - a[0];
//         }
//     })

//     return dSort.flat().filter(el => typeof(el) === typeof('')).join('');
// }

function solution(numbers) {
  let result = numbers
    .map((el) => el.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return result[0] === "0" ? "0" : result;
}
