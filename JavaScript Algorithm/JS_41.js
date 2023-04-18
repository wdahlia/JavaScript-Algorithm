
// 소수 판별 프로그램

const num = prompt('숫자를 입력해주세요');

function isPrime(num) {
  for (let i=2; i < num; i++ ) {
    const res = num % i
    if (res === 0) {
      return 'NO';
    }
  }
  if ( Number(num) === 1 ) {
    return 'NO'
  }
  return 'YES'
}

isPrime(num);