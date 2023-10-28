function solution(ineq, eq, n, m) {
    // ineq , eq가 문자열
    let answer = 0;
    eval(`${n} ${ineq}${eq === '!' ? '' : eq} ${m}`) ? answer = 1 : answer = 0;
    return answer;
}