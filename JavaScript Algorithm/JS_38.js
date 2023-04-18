
// 호준이의 아르바이트
// 1위부터 3위는 여러명일 수 있고, 중복되는 학생까지 포함하여 학생

// const input = prompt('점수를 공백으로 구분하여 입력해주세요').split(' ');
const input = prompt('점수를 공백으로 구분하여 입력해주세요').split(' ').map((score) => {
  return parseInt(score, 10);
})

input.sort((x, y) => {
  return y-x;
})

obj = {}

for (score of input) {
  if (!obj[score]) {
    obj[score] = 1
  } else {
    obj[score] += 1
  }
  if (Object.entries(obj).length === 3) {
    break
  }
}

const result = Object.values(obj).reduce((res, value) => res + value, 0)

console.log(result)