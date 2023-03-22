
const input = prompt('공백으로 구분하여 두 숫자를 입력하세요').split(' ');

console.log(Math.floor(input[0]/input[1]), (input[0]%input[1]));