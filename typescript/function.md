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
```
