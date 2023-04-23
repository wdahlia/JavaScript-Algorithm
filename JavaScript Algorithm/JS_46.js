
// 각 자리수의 합 2
// 1부터 20까지의 모든 숫자를 일렬로 놓고 모든 자리수의 총합을 구하기

let numbers = '';
let sum = 0;

for (let i=1; i<=20; i++) {
  numbers += i;
}

numbers = numbers.split('');

const result = numbers.reduce((res, present) => res += Number(present), 0);
console.log(result);