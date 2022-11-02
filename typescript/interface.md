```typescript
// interface 객체
type Score = 'A' | 'B' | 'C' | 'F';
//객체를 정의할때는 interface를 사용한다.
interface User {
    name: string;
    age: number;
    gender? : string; //추가를 해도 되고 안해도 되는 속성
    readonly birthYear : number; //읽기전용
    [grade:number] : Score;
}

let user: User = {
    name: 'youjung',
    age: 25
    birthYear: 2000,
    1: 'A',
    2: 'B',
}

user.age = 10;
user.gender = 'male';
user.birthYear = 1900; // readonly이므로 수정 불가능!!


// interface 함수
interface Add {
    (num1:number, num2:number): number;
}
const add : Add = function(x, y) {
    return x + y
}
interface IsAdult {
    (age:number):boolean;
}
const a:IsAdult = (age) => {
    return age > 20
}

```
