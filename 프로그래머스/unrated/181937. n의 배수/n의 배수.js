function solution(num, n) {
    let answer = 0;
    !(num % n) ? answer = 1 : answer = 0;
    return answer;
}