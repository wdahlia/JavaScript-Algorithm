
// 2020년, 윤년

const x = prompt('몇월 인가요?');
const y = prompt('몇일 인가요?');

const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function findADay(a, b) {
  const newDay = new Date('2020-' + Number(a) + '-' + Number(b));
  return day[newDay.getDay()];
}

console.log(findADay(x, y));