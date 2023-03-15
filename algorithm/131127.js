//첫번째 코드 실행이 너무 오래 걸려서 테스트 통과 못함.

// function solution(want, number, discount) {
//     // 회원등록을 할 수 있는 날짜 전부를 리턴해야한다.
//     // 처음부터 10개의 배열을 확인해본다.
//     // 자른 배열의 개수를 센다.
//     // wnat[i]가 number[i]개 만큼 있는걸 filter한다.
 
//     let countDiscount = [];
//     for(let i = 0; i < discount.length; i ++) {
//         let occurrences = {};
//         let sliceDiscount = discount.slice(i, i + 10)
//         for (let v of sliceDiscount) {
//              occurrences[v] = occurrences[v] ? occurrences[v] + 1 : 1;
//             }
//         countDiscount.push(occurrences);
//     }

//     const wantNumber = want.reduce((ac, cu, idx) => {
//     return { ...ac, [cu]: number[idx] };
//     }, new Object);
    

    
//     let result = [];
//     countDiscount.forEach((el, i) => {
//         let arr = []
//         for(let j = 0; j < countDiscount.length; j++) {
//             let element = want[j]
//             if((el[element] >= wantNumber[element])) {
//                arr.push(true)
//              }
//         }
//         result.push(arr)
//     })
// //     let result = 0;
// //     for(let el of countDiscount) {
// //         let match = true;
// //         for(let i = 0; i < want.length; i++) {
// //              const element = want[i];

// //             if((el[element] <= wantNumber[element])) {
// //                 match = false;
// //                 break;
// //             }
// //         }
// //         if(match) {
// //             result++;
// //         }
        
// //     }

//     return result.filter(el => el.length === want.length).length;
// }



// 수정한 코드
function solution(want, number, discount) {
    let countDiscount = [];
    for(let i = 0; i < discount.length; i ++) {
        let occurrences = {};
        let sliceDiscount = discount.slice(i, i + 10)
        for (let v of sliceDiscount) {
             occurrences[v] = occurrences[v] ? occurrences[v] + 1 : 1;
            }
        countDiscount.push(occurrences);
    }

    const wantNumber = want.reduce((ac, cu, idx) => {
    return { ...ac, [cu]: number[idx] };
    }, new Object);
    

    
    // 이부분 수정 break 추가 및 코드 일부 변경
    let result = 0;
    countDiscount.forEach((el, i) => {
        let match = true;

        for(let j = 0; j < want.length; j++) {
            let element = want[j]
            if((el[element] < wantNumber[element])) {
               match = false;
                break;
             }
            
            if(!Object.keys(el).includes(element)) {
                match = false;
                break;
            }
        
        }
          if(match) {
                result++;
            }
        
    })
    
    return result;
}

