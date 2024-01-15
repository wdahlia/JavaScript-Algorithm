function solution(a, b) {
    let answer = 0;
    const isAEven = a % 2 ? false : true;
    const isBEven = b % 2 ? false : true;
    
    !isAEven && !isBEven ? answer = a**2 + b**2 
    : !isAEven || !isBEven ? answer = 2 * (a + b)
    : isAEven && isBEven ? answer = Math.abs(a - b) : null
    
    return answer;
}