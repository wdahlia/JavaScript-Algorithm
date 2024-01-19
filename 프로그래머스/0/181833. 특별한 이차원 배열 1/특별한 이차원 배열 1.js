function solution(n) {
    let answer = new Array(n).fill(0).map(() => new Array(n));
    for (let i=0; i<answer.length; i++) {
        for (let j=0; j<answer[i].length; j++) {
            i === j ? answer[i][j] = 1 : answer[i][j] = 0;
        }
    }
    return answer;
}