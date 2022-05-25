## 문제

0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.

### 주의 사항

반복문(for, while) 사용은 금지됩니다.<br/>
배열의 길이가 8인 경우, 앞에 [0, 1, 0]이 있다고 가정합니다.<br/>

### 입출력 예시

let output = createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);<br/>
console.log(output); // --> '(010)1234-5678'<br/>

output = createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]);<br/>
console.log(output); // --> '(010)8765-4321'<br/>

output = createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]);<br/>
console.log(output); // --> '(011)4321-8765'<br/>

## ⭐️처음 작성한 코드⭐️

```javascript
function createPhoneNumber(arr) {
  // 길이가 8 인 경우
  let head = '010';
  let front = arr.slice(0, 4).join('');
  let back = arr.slice(4).join('');

  //길이가 11인 경우
   if(arr. length === 11) {
    head = arr.slice(0, 3).join('');
    front = arr.slice(3, 7).join('');
    back = arr.slice(7).join('');
  }

  return  `(${head})${front}-${back}`
```

처음에는 코드를 썻을때는 "길이가 8인 경우와 11인 경우 두개로 나누어서 선언된 head, front, back의 slice와 join 위치만 변경하여 할당해주면 되겠지?" 라고 생각하며 풀었다.<br/>
물론 풀렸지만 어떻게해야 깔끔하게 쓸 수 있을까 생각해보니 "아.. slice를 뒤에서 부터하면 11이나 8이나 똑같은 위치에서 가져올 수 있기때문에 코드를 더깔끔하게 쓸 수 있겠구나"를 깨달았다.<br/>

## ⭐️변경 코드⭐️

```javascript
function createPhoneNumber(arr) {
  // 길이가 8 인 경우
  let head = '010'
  let front = arr.slice(-8, -4).join('') //뒤에서부터 가져옴
  let back = arr.slice(-4).join('')

  //길이가 11인 경우
   if(arr. length === 11) {
    head = arr.slice(0, 3).join('');
  }

  return  `(${head})${front}-${back}`
```
