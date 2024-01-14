function solution(arr, n) {
    let answer = [];
    let startIdx = arr.length % 2 ? 0 : 1;
    for (let i=0; i < arr.length; i++) {
        if (i === startIdx) {
            answer.push(arr[i] + n);
            startIdx += 2;
        } else {
            answer.push(arr[i])
        }
    }
    return answer;
}