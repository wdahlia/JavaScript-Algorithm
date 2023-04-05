
// apple 문자 숨어 있는데 문자 찾아야함

const input = prompt('문자열을 입력하세요.');
const findLetter = prompt('찾을 문자열을 입력하세요');

// includes 메서드를 사용하면 된다 - boolean형으로 반환
// indexOf 인자로 전달된 문자열이 있는지 찾고, 문자열 위치에 해당하는 index 리턴 - 찾는 문자열 없으면 -1리턴

const result = input.indexOf(findLetter);

result !== -1 ? console.log(result) : null