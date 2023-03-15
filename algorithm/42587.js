//반례를 찾지 못하였다. 찾는대로 수정 할 예정
function solution(priorities, location) {
  let bigNum = priorities.indexOf(Math.max(...priorities));
  let arr = [];
  let hi = bigNum;

  for (let i = 0; i < priorities.length; i++) {
    if (i >= priorities.length) {
      hi = 0;
    }

    let subNum = priorities.indexOf(Math.max(...priorities), hi);

    if (subNum === -1) {
      subNum = priorities.indexOf(Math.max(...priorities));
      hi = subNum;
    }

    priorities[subNum] = 0;
    arr.push(subNum);
    hi++;
  }
  return arr.indexOf(location) + 1;
}
