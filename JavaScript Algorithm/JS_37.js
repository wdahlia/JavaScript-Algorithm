
// 반장 선거

const input = prompt('학생이 뽑은 후보들을 입력해주세요.').split(' ')
// const input = ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진']
let obj = {};

for (name of input) {
  if (name in obj) {
    obj[name] += 1
  } else {
    obj[name] = 1
  }
}

const maxNum = Math.max(...Object.values(obj));

for (const [k, v] of Object.entries(obj)) {
  if ( obj[k] === maxNum ) {
    console.log(`${k}(이)가 총 ${v}표로 반장이 되었습니다.`)
  }
}


const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for(let index in array){
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
} 

winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);