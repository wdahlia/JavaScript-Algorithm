
// concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
// concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
// 기존 배열 변경 X, 추가된 새로운 배열을 반환

// 데이터
const year = '2019';
const month = '04';
const day = '26';
const hour = '11';
const minute = '34';
const second = '27';
const result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

// 출력
// 2019/04/26 11:34:27