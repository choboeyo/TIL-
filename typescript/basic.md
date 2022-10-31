```typescript
let person:string = 'youjung';

let isAdult:boleean = true;

let arrayNumber:number[] = [1,2,3];
let arrayNumber2:Array<number> = [1,2,3];

let arrayString:string[] = [1,2,3];
let arrayString2:Array<string> = [1,2,3];

// 튜플 (Tuple)
let b:[string, numger];
b = ['z', 1] // 가능
b = [1, 'z'] // 불가능
b[0].toLowerCase(); // 가능
b[1].toLowerCase(); // 불가능

//void =>함수가 아무것도 반환하지 않을때
function sayHello():void {
    console.log('hello');
}

//never => 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않을때
function invalid(message:string): never {
  throw new Error(message);
}
function infiniteAnimate(): never {
  while ( true ) { infiniteAnimate(); }
}

//enum ->  열거형 데이터 타입을 지원 d
enum Team {
  Manager,   // 0
  Planner,   // 1
  Developer, // 2
  Designer,  // 3
}
let sarha:number = Team.Designer; // (enum member) Team.Designer = 3

//enum에 설정된 아이템에 값을 할당할 수도 있습니다. 값이 할당되지 않은 아이템은 이전 아이템의 값에 +1된 값이 설정됩니다
enum Team {
  Manager   = 101,
  Planner   = 208,
  Developer = 302,
  Designer, // 302 + 1
}
let yamoo9:number = Team.Manager; // (enum member) Team.Manager = 101
let sarha:number = Team.Designer; // (enum member) Team.Designer = 303

// null, undefined
let a:null = null;
let b:undefined: undefined;

```
