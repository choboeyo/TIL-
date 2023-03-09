// 연속 부분 수열 합의 개수
function solution(elements) {
    let sortElements = [...elements, ...elements]
     
    let newArr = new Set();
    for(let i = 0; i < sortElements.length; i ++) {
        sortElements.shift();
        for(let j = 1; j < elements.length + 1; j ++ ) {
            let tmp = sortElements.slice(0, j);
            let reduceTmp = tmp.reduce((ac, cu) => ac + cu, 0);
            newArr.add(reduceTmp);
        }
    }
    return newArr.size;
}