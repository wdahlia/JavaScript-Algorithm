function solution(strArr) {
    let answer = [];
    for (str of strArr) {
        const isIncluded = str.includes('ad');
        !isIncluded ? answer.push(str) : null;
    }
    return answer;
}