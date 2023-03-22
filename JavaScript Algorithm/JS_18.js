
// 국어, 수학, 영어 시험

const input = prompt('세 과목의 점수를 각각 한 칸씩 띄워써주세요');

const array = input.split(' ');

const result = array.reduce((current, num) => current += Number(num), 0);

console.log(Math.floor(result / 3));