function solution(cards) {
  let answer = 0;
  let box = new Array(cards.length).fill().map((a, i) => {
    return i + 1;
  });

  let arr = [];

  function check(card) {
    let cardStorage = cards[0];
    let index = 0;

    if (card === cardStorage && arr.length !== 0) {
      box = box.filter((el) => !arr.includes(el));
      cards = cards.filter((el) => !arr.includes(el));
      return arr;
    }

    if (box.includes(card)) {
      index = box.indexOf(card);
      arr.push(card);
    }

    // 카드를 하나 열어본다. -> 값 저장
    // 그 카드값이랑 똑같은 상자가 있는지 확인한다.
    // 있다면 그 인덱스에 있는 카드를 본다.

    // 그 카드 값이랑 똑같은 상자가 box에 있는지 확인한다.
    // 있다면 그 인덱스에 있는 카드를 본다.

    // 만약 처음 열어봤던 카드랑 똑같은 카드가 나온다면 멈춘다.
    // if(cards[i] === card)
    // 만약 처음 열어봤던 카드랑 똑같은 카드가 나온다면 멈춘다.
    //     1, 8
    //     8, 4
    //     4, 7
    //     7, 1
    //     1, 8

    return check(cards[index]); // 재귀함수
  }

  const result = [];
  for (let i = 0; i < cards.length + 1; i++) {
    result.push(check(cards[0]).length);
    arr = [];
  }

  result.sort((a, b) => b - a);
  console.log(result);
  return result.length > 1 ? result[0] * result[1] : 0;
}

// 100장의 카드가있음.
// 각 카드에는 1 부터 100까지 숫자가 하나씩 적혀있음.

// 자연수: 8
// 카드: 8 6 3 7 2 5 1 4
// 작은상자: 8

// 상자 1 1 1
// 카드 8 6 3 7 2 5 1 4
// 상자 섞어
// 상자가 일렬로 나열되면 상자가 나열된 순서에 따라 1번부터 순차적으로 증가하는 번호를 붙입니다.
// 상자 1 2 3 4 5 6 7 8
// 카드 8 6 3 7 2 5 1 4
// 그 다음 임의의 상자를 하나 선택하여 선택한 상자 안의 숫자 카드를 확인합니다.
// 상자 1
// 카드 8
// // 다음으로 확인한 카드에 적힌 번호에 해당하는 상자를 열어 안에 담긴 카드에 적힌 숫자를 확인합니다.
// 상자 8
// 카드 4
// // 마찬가지로 숫자에 해당하는 번호를 가진 상자를 계속해서 열어가며, 열어야 하는 상자가 이미 열려있을 때까지 반복합니다.
// 상자 4
// 카드 7

// 상자 7
// 카드 1
// // 1 번 그룹

// 상자 2 3 5 6
// 카드 6 3 2 5

// // 3이 속하는 상자 그룹
// 상자 3
// 카드 3

// // 2 번 그룹
// 상자 2 5 6
// 카드 6 2 5

// 상자 2
// 카드 6

// 상자 6
// 카드 5

// 상자 5
// 카드 2
