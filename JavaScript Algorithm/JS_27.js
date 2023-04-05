
//

let name = prompt('공백으로 구분하여 학생의 이름 입력해주세요').split(' ');
let score = prompt('공백으로 구분하여 수학 점수를 입력해주세요').split(' ');


const result = {}

for (let i=0; i < 2; i++) {
  console.log(name[i])
  result[name[i]] = Number(score[i]);
  // result[name[i]] = parseInt(values[i], 10)
}

console.log(result)