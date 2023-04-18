
// 오타 수정하기
// 모든 q를 e로 바꾸는 프로그램 작성

const input = prompt('문장을 입력해주세요').replace(/q/gi, 'e');
// g의 경우 모든 pattern에 대한 전역 검색 i는 대소문자 구별 안한다는 뜻
// replaceAll 이라는 메서드도 존재
console.log(input);