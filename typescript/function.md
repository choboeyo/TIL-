```typescript
function IsAdult(age: number): boolean {
  return age > 19;
}

function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}
function hello2(name = "world") {
  return `Hello, ${name}`;
}
const result = hello();

//선택적 매개변수가 필수 매개변수보다 앞에오면 에러발생
function hello3(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}, You are ${age}.`;
  } else {
    return `Hello, ${name}.`;
  }
}

// ...사용시 전달받은 매게변수를 배열로 사용할 수 있음
function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add(1, 2, 3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
```
