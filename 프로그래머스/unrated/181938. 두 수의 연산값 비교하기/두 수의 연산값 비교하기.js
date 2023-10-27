function solution(a, b) {
    let answer = 0;
    const sumAB = a.toString() + b.toString();
    const doubleAB = 2 * a * b;
    (sumAB > doubleAB || sumAB === doubleAB) ?
        answer = Number(sumAB)
        :
        answer = doubleAB 
    return answer;
}