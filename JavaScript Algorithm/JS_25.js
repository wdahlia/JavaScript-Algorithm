
// 함수를 사용해서 원의 넓이를 구하는 코드를 작성

function circle(n) {
  const result = Number(n) ** 2 * 3.14;
  return result;
}

const circle = (n) => {
  return Number(n) ** 2 * 3.14
}

const circle = (n) => Number(n) ** 2 * 3.14

const input = prompt('원의 반지름을 입력하세요')

console.log(circle(input));
