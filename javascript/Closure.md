# 클로저(Closure)

클로저는 상태를 안전하게 변경하고 유지하기 위해 사용된다.
상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용 하기위해 사용된다.

```javascript
let num = 0;
const increase = function () {
  return ++num;
};
console.log(increase());
1; //1
console.log(increase());
2; //2
console.log(increase());
3; //3
```

위의 코드는 num의 상태를 전역으로 관리하고 있기 때문에 누구나 접근할 수 있고 변경할수있다. </br>
이는 의도치 않게 상태가 변경될 수 있다는 것을 의미한다. 만약 누군가에 의해서 num의 값이 변경된다면 이는 오류로 이어진다. </br>
따라서 카운트 상태를 안전하게 변경하고 유지하기 위해서는 increase 함수만이 num의 변수를 참조하고 변경할 수 있게 하는것이 바람직하다. </br></br>

위의 코드를 클로저를 사용해서 바꿔보자.

```javascript
const increase = (function () {
  let num = 0;
  return function () {
    return ++num;
  };
})();
console.log(increase());
1; //1
console.log(increase());
2; //2
console.log(increase());
3; //3
```

위 코드가 즉시 실행되면 즉시 함수가 호출되고 반환된 함수가 increase 변수에 할당된다.<br/>
increase 변수에 할당된 함수는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행함수의 렉시컬 환경을 기억하는 클로저다. </br>
즉시 실행함수는 한번만 실행되므로 increaserk 호출될 때마다 Num 변수가 재차 초기화 될일 없으며 num변수는 은닉된 상태 이므로 의도치 않은 변경을 걱정할 필요도 없기때문에 안정적인 프로그램이이 가능하다.</br>
이처럼 클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위하여 사용된다.
