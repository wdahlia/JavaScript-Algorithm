
// 버블 정렬 구현하기

function bubble(arr) {
  let result = arr.slice(); 
  console.log(result)

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        let tmp = result[j]
        result[j] = result[j + 1]
        result[j + 1] = tmp
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});
// 각각의 입력값을 공백을 기준으로 나누고 그 값들을 돌면서 10진수로 변환해준다.

console.log(bubble(items));