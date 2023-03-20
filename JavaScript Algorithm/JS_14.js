
// 3의 배수이면 박수 짝을 출력
// 아니라면 그냥 출력

const input = prompt('숫자를 입력해주세요');

console.log(input % 3 ? input : '짝');