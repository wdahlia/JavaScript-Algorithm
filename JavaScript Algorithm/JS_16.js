
const input = '거꾸로 출력할 문자열을 입력하세요'
console.log(input.split('').reverse().join(''));

// .reduceRight을 사용한 방법
const result = input.split('').reduceRight((words, currentValue) => words += currentValue, '');
console.log(result)