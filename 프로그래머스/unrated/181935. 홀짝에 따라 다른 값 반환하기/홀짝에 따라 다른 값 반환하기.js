function solution(n) {
    let answer = 0;
    if (!(n % 2)) {
        for (let i=2; i <= n; i+=2) {
            answer += Math.pow(i, 2);
        }
    } else {
        for (let i=1; i <= n; i+=2) {
            answer += i
        }
    }
    return answer;
}