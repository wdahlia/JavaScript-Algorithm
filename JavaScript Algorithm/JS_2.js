
// 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

// 데이터
const arr = [200, 100, 300];
// splice 메서드를 사용 - 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

arr.splice(2, 0, 10000);

//pass
console.log(arr);

// 출력
// [200, 100, 10000, 300]