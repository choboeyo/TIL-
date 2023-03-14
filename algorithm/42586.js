function solution(progresses, speeds) {
    //리턴 값은 기능의 갯수임.
    // 7 3 9
    // 5 10 1 1 20 1
    // 100 - 30 = 70 / 30 올림.
    let day = []
    for(let i = 0; i < progresses.length; i++ ) {
        const a = 100 - progresses[i];
        day.push(Math.ceil(a / speeds[i]));
    }
    
    // 큰 수가 나올때까지 센다.
    // i 보다 큰 수가 나올때까지 센다.
 
    let hi = [];
    let count = 0;
    function result (n) {
        // 만약 n이 더 크면 종료.
        let num = day[0]; // 20
        if(day[n] > num) {
            hi.push(count);
            count = 0;
            day = day.slice(n);
           return hi;
           } else if(day.length === 1) {
                return hi;
           } else if(day.length === n) {
               return hi;
           }
        else {
                count ++;
           }
        return result(n + 1);
    }
    
    
    for(let i = 0; i < progresses.length; i ++)  {
        result(0);
    }
    
    
    return [...hi, day.length];
}

// function solution(progresses, speeds) {
//   const result = [];
//   const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index])); // 각 작업이 완료되는데 걸리는 일수 계산

//   let maxDay = daysLeft[0];
//   let count = 0;

//   daysLeft.forEach((dayLeft) => {
//     if (maxDay >= dayLeft) { // 이전 작업보다 더 오래 걸리는 작업이 등장하지 않은 경우
//       count++;
//     } else { // 이전 작업보다 더 오래 걸리는 작업이 등장한 경우
//       result.push(count);
//       count = 1;
//       maxDay = dayLeft;
//     }
//   });
//   result.push(count); // 마지막 남은 작업들을 추가해줌

//   return result;
// }