function solution(a, b, flag) {
    let answer = 0;
    flag ? answer = a + b : answer = a - b;
    return answer;
}