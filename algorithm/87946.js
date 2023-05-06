// function solution(k, dungeons) {
//     let sort = dungeons.map(el => {return [...el,el[0] - el[1]]}).sort((a,b) => b[2] - a[2]);
//     let count = 0
//     for(let i = 0; i < sort.length; i ++) {
//         if(sort[i][0] <= k) {
//             k -= sort[i][1]
//            count++;
//         }
//     }

// // 60 10 20
// //     [[80,20],[50,40],[30,10]]	 // 2
// //     1 - 3 - 2   순으로 탐험해야..

// //     [80 50 30] 순이면.. 불가능..

// //     1. 최소 피로도가 제일 높은 곳을 탐색한다.
// //     2. 만약 현재 피로도 - 최소 피로도가
// //     60 - 40 = 20

//     return count;
// }

function solution(k, dungeons) {
  var answer = 0;

  function dfs(visited, tmpK, count) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && tmpK >= dungeons[i][0]) {
        visited[i] = true;
        dfs(visited, tmpK - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, count);
  }

  let visited = Array(dungeons.length).fill(false);
  dfs(visited, k, 0);

  return answer;
}
