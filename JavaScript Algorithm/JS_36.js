
// 구구단 출력하기

const input = prompt('1에서부터 9까지의 숫자 중 하나를 입력해주세요.');
let result = '';

for (let i=1; i < 10; i++) {
  result += (input * i) + ' '
}

console.log(result);