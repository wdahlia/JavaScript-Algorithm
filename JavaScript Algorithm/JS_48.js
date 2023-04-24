
// 대소문자 바꿔서 출력하기

const input = prompt('문자열을 입력해주세요.');
let result = '';

for (let i=0; i < input.length; i++) {
  if (input[i] === input[i].toLowerCase()) {
    result += input[i].toUpperCase();
  } else {
    result += input[i].toLowerCase();
  }
}

console.log(result);