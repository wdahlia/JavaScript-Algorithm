
// 거꾸로 출력하기

const input = prompt('여러개의 숫자를 입력해주세요').split(' ');
const result = input.reverse();

for (let i=0; i < result.length; i++) {
  process.stdout.write(result[i] + ' ');
}