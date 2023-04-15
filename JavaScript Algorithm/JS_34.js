
// sort 구현하기
// 키가 주어지면 순서대로 섰는지 확인하는 프로그램 작성

const input = prompt('공백을 기준으로 키를 입력해주세요').split(' ');
const arr = input.sort();

function checkLine(array) {
  for (let i=0; i < array.length - 1; i++) {
    if ( array[i] <= array[i+1] ) {
      continue
    } else {
      return 'NO'
    }
  }
  return 'YES'
}

