
// 놀이동산에 가자

const limit = Number(prompt('제한 무게를 입력해주세요'));
const friendsNum = Number(prompt('친구들의 수를 입력해주세요'));

let total = 0
let idx = 0

for (i=0; i < friendsNum; i++) {
  total += Number(prompt('몸무게를 입력해주세요'));
  if (total <= limit) {
    idx = i + 1
  } else {
    break
  }
}

console.log(idx)