function solution(s) {
  let bracket = 0;
  if (s[0] === ")") {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        bracket++;
      } else {
        bracket--;
        if (bracket < 0) {
          return false;
        }
      }
    }
    if (bracket !== 0) {
      return false;
    } else {
      return true;
    }
  }
}
