function solution(number, n, m) {
    let answer = 0;
    !(number % n) && !(number % m) ? answer = 1 : answer = 0;
    return answer;
}