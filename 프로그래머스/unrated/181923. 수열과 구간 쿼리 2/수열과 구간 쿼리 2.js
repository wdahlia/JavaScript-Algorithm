function solution(arr, queries) {
    let answer = [];
    // s보다 크거나 같고 e보다 작거나 같은 인덱스 중
    // k보다 크면서 가장 작은 arr[i]를 찾기
    // 답이 존재하지 않는다면, 즉, k보다 작거나 같다면 -1
    
    for (const query of queries) {
        const [s, e, k] = [...query];
        let queryArr = [];
        for (let i=s; i<=e; i++) {
            if (arr[i] > k) {
                queryArr.push(arr[i]);
            }
        }
        !queryArr.length ? answer.push(-1) : answer.push(Math.min(...queryArr))
    }
    return answer;
}