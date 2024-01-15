function solution(strArr) {
    // 배열 홀수번째 대문자로, 짝수번째는 소문자로
    let answer = [];
    for (let i=0; i<strArr.length; i++) {
        i % 2 ? answer.push(strArr[i].toUpperCase()) : answer.push(strArr[i].toLowerCase());
    }
    return answer;
}