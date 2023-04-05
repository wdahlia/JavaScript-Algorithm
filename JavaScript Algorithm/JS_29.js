
// 알파벳하나만을 입력

const input = prompt('알파벳 하나를 입력해주세요');

const result = /[A-Z]/.test(input)

if (result) {
  console.log('YES')
} else {
  console.log('NO')
}