
// 최댓값 구하기

let input = prompt('10개의 숫자 입력').split(' ')
// let input = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

const result = input.reduce((res, present) => {
  console.log(res, present)
  if (res < Number(present)) {
    res = present
    return res
  } else {
    return res
  }
}, 0)

console.log(result)