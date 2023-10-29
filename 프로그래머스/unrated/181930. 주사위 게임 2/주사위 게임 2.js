function solution(a, b, c) {
    let i = 0;
    let answer = 1;
    // 세 숫자가 모두 다르면 a + b + c
    // 두 숫자는 같고 하나는 다르다면 (a + b + c) x (a^2 + b^2 + c^2)
    // 세 숫자가 모두 같다면 (a + b + c) x (a^2 + b^2 + c^2) x (a^3 + b^3 + c^3)
    (a === b && b === c) ? 
        i = 3 
        : (a !== b && b !== c && a !== c) ? 
        i = 1
        : i = 2
    
    for (let j=1; j <= i; j++) {
        answer *= ((a ** j) + (b ** j) + (c ** j));
    }
    return answer;
}