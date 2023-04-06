// function solution(players, callings) {

//     for(let i = 0; i < callings.length; i++) {
//         let ind = players.indexOf(callings[i]);
//         //첫번째 시도 - 9, 10, 11, 12, 13 시간 초과
//         // players.splice(ind, 1);
//         // players.splice(ind-1, 0, callings[i]);

//         // 두번째 시도 - 10, 11, 12, 13 시간 초과
//         let tmp = players[ind - 1]
//         players[ind - 1] = callings[i];
//         players[ind] = tmp;
//     }

// //     let result = {};
// //     for(const el of callings) {
// //         result[el] = (result[el] || 0) + 1;
// //     }

// //     for(let el in result) {
// //        let ind = players.indexOf(el);
// //        let tmp = players[ind - result[el]]
// //         players[ind - result[el]] = el
// //         players[ind] = tmp
// //         console.log(players)
// //     }
//         return players;
// }

function solution(players, callings) {
  let result = new Map();

  for (let i = 0; i < players.length; i++) {
    result.set(players[i], i);
  }

  for (let calling of callings) {
    const cur = result.get(calling);

    if (cur > 0) {
      const bPlayer = players[cur - 1];

      players[cur] = bPlayer; // 역전 당한 선수
      players[cur - 1] = calling; // 현재 선수

      result.set(calling, cur - 1); // 역전한 현재 선수의 키값은 -1해서 넣어주기
      result.set(bPlayer, cur); // 역전 당한 선수의 키값은 현재값으로,
    }
  }

  return players;
}
