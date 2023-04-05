
// 2-gram 
// 문자열에서 2개의 연속된 요소를 출력

const input = prompt('문자열을 입력해주세요');

function twoGram(value) {
  for(let i=0; i < input.length -1; i++) {
    console.log(input[i], input[i+1])
  }
}

twoGram(input)