
// getTime() 함수 사용 
// 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환
// 2023년도 출력하는 방법

const date = new Date();

let now = date.getTime(); // ms s m h d
now = Math.floor(now / ( 1000 * 60 * 60 * 24 * 365 )) + 1970;
console.log(now)