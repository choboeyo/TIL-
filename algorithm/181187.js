// function solution(r1, r2) {
//     let result = 0;

//     for(let i = r1; i < r2; i++) {
//        result += i * 8;

//     }
//     return result + 4;
// }

// // 0  1
// // 8  2
// // 16
// // 24 3
// // 32

// // // r1이 2..
// // // r2가 3..
// // // 16

// // 8
// // 16
// // 24

// // // r1이 1
// // // r2가 3..
// // // 24

// // // r1이 1
// // // r2가 4면..?
// // // 48

// // // 8
// // // 16
// // // 24
// // // 32 4

function solution(r1, r2) {
  let result = 0;
  for (let i = 1; i <= r1; i++) {
    console.log(Math.floor(r2 ** 2 - i ** 2));
    result +=
      Math.floor(Math.sqrt(r2 ** 2 - i ** 2)) -
      Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)) +
      1;
  }

  for (let i = r1 + 1; i <= r2; i++) {
    result += Math.floor(Math.sqrt(r2 ** 2 - i ** 2)) + 1;
  }

  return result * 4;
}
