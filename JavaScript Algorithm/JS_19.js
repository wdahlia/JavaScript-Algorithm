
const input = prompt('공백으로 구분하여 두 숫자를 입력해주세요');

const array = input.split(' ');

// 방법 1
console.log(Number(array[0]) ** Number(array[1]));

// 방법 2
// Math.pow base^exponent처럼 base 에 exponent를 제곱한 값을 반환
// parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
// parseInt(string, radix)
console.log(Math.pow(parseInt(array[0], 10), parseInt(array[1], 10)));