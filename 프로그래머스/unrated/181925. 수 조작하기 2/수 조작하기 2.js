function solution(numLog) {
    let answer = "";
    let compareNum = numLog[0];
    
    for (i=1; i < numLog.length; i++ ) {
        const diff = numLog[i] - compareNum;
        diff === -1 ?
            answer += "s"
            : diff === 1 ?
            answer += "w"
            : diff === -10 ?
            answer += "a"
            : answer += "d"
        compareNum = numLog[i];
    }
    return answer;
}