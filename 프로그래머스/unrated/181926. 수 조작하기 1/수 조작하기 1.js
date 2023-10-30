function solution(n, control) {
    let answer = n;
    for (alph of control) {
        alph === "w" ?
            answer += 1
            : 
            alph === "s" ?
            answer -= 1
            :
            alph === "d" ?
            answer += 10
            :
            answer -= 10
    }
    return answer;
}