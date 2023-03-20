function solution(str1, str2) {
  var answer = 0;
  //두개씩 끊는다.
  let splitStr1 = [];
  let splitStr2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    let upperStr1 = str1.toUpperCase();
    let str1Split = upperStr1.substring(i, 2 + i);
    if (/\W|\s|\d/.test(str1Split)) {
      splitStr1 = splitStr1;
    } else {
      splitStr1.push(str1Split);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let upperStr2 = str2.toUpperCase();
    let str2Split = upperStr2.substring(i, 2 + i);
    if (/\W|\s|\d/.test(str2Split)) {
      splitStr2 = splitStr2;
    } else {
      splitStr2.push(str2Split);
    }
  }

  let bigLength;
  let smallLength;
  if (splitStr1.length <= splitStr2.length) {
    bigLength = splitStr2;
    smallLength = splitStr1;
  } else {
    bigLength = splitStr1;
    smallLength = splitStr2;
  }

  let intersection = 0;
  for (let i = 0; i < bigLength.length; i++) {
    if (bigLength.includes(smallLength[i])) {
      let strIndex = bigLength.indexOf(smallLength[i]);
      intersection++;
      smallLength[i] = 0;
      bigLength[strIndex] = 0;
    }
  }
  let union = splitStr1.length + splitStr2.length - intersection;

  return Math.floor((intersection / union) * 65536) || 65536;
}
