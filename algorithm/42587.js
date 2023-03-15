function solution(priorities, location) {
  let bigNum = priorities.indexOf(Math.max(...priorities));
  let arr = [];

  for (let i = 0; i < priorities.length; i++) {
    let subNum = priorities.indexOf(Math.max(...priorities), bigNum);

    if (subNum === -1) {
      subNum = priorities.indexOf(Math.max(...priorities));
      bigNum = subNum;
    } else {
      bigNum = subNum;
    }

    priorities[subNum] = 0;
    arr.push(subNum);
    bigNum++;
  }

  return arr.indexOf(location) + 1;
}
