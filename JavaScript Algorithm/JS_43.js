
// 10진수를 2진수로

const number = Number(prompt('값을 입력해주세요')).toString(2);
console.log(number)

// 혹은

let num = Number(prompt('값을 입력해주세요'));
let arr = [];
let res = '';

while (num) { // 즉 num이 1 True 일때까지
  arr.push( num % 2 );
  num = parseInt(num / 2, 10);
  console.log(num)
}
arr.reverse();

arr.forEach(n => {
  res += n;
})

console.log(res)

