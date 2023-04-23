
// 각 자리수의 합

let num = prompt('양의 정수를 입력해주세요').split('');

const result = num.reduce((res, present) => res += Number(present), 0);

console.log(result)