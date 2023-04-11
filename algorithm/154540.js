// function solution(maps) {
//     let answer = [];
//     let splitMaps = maps.map(el => el.split(''));
//     function findX(x,y,sum) {
//         if(x >= splitMaps.length || y >= splitMaps[0].length || splitMaps[x][y] === 'X') {
//            return sum;
//          }

//         sum.push(Number(splitMaps[x][y]));
//         splitMaps[x][y] = 'X'

//         return findX(x + 1, y, sum), findX(x, y + 1, sum)
//      }

//     for(let i = 0; i < splitMaps.length; i++) {
//         for(let j = 0; j < splitMaps[i].length; j++) {
//             if(splitMaps[i][j] !== 'X') {
//                 let find = findX(i,j,[]);
//                 // 앞뒤 양옆 X가 없을때까지 반복한다.. 재귀..?
//                 answer.push(find.reduce((a,b) => a + b, 0));
//             }
//         }
//     }
//     if(answer.length === 0) return [-1];
//     return answer.sort((a,b) => a - b);
// }

function solution(maps) {
  let answer = [];
  let splitMaps = maps.map((el) => el.split(""));

  function findX(x, y, sum) {
    if (
      x < 0 ||
      x >= splitMaps.length ||
      y < 0 ||
      y >= splitMaps[0].length ||
      splitMaps[x][y] === "X"
    ) {
      return sum;
    }

    sum.push(Number(splitMaps[x][y]));
    splitMaps[x][y] = "X";

    return (
      findX(x + 1, y, sum) &&
      findX(x - 1, y, sum) &&
      findX(x, y + 1, sum) &&
      findX(x, y - 1, sum)
    );
  }


  for (let i = 0; i < splitMaps.length; i++) {
    for (let j = 0; j < splitMaps[i].length; j++) {
      if (splitMaps[i][j] !== "X") {
        let find = findX(i, j, []);
        if (find) {
          answer.push(find.reduce((a, b) => a + b, 0));
        }
      }
    }
  }

  if (answer.length === 0) return [-1];
  return answer.sort((a, b) => a - b);
}
