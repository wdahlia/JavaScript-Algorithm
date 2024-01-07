function solution(arr) {
    // 2가 포함된 가장 작은 연속된 부분 배열 return
    let answer = [];
    const startIdx = arr.indexOf(2);
    const endIdx = arr.lastIndexOf(2);
    
    if (startIdx === -1) {
        answer = [-1]
    } else {
        answer = arr.slice(startIdx, endIdx + 1);
    }
    return answer;
}