function solution(my_string, target) {
    // 부분 문자열인지를 true, false로 구별하는 로직 작성
    let answer = 0;
    my_string.includes(target) ? answer = 1 : null;
    return answer;
}