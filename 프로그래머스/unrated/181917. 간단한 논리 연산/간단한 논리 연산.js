function solution(x1, x2, x3, x4) {
    let answer = true;
    let a;
    let b;
    
    !x1 && !x2 ? a = false : a = true;
    !x3 && !x4 ? b = false : b = true;
    
    !a || !b ? answer = false : answer = true;
    
    return answer;
}