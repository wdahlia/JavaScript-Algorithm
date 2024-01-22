function solution(arr, queries) {
    // queries 내부에 들어있는 [s, e]에서 s보다 크거나 같고 e보다 작거나 같은 index에 대해 arr[i]에 1을 더함
    let answer = [...arr];
    for ([s, e] of queries) {
        for (let i=s; i<=e; i++) {
            answer[i] += 1
        }
    }
    
    return answer;
}