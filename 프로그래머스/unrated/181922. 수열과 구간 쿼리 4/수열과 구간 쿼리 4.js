function solution(arr, queries) {
    let answer = [...arr];
    for (const query of queries) {
        const [s, e, k] = [...query];
        for (let i=s; i<=e; i++) {
            if (!(i % k)) {
                answer[i] += 1
            }
        }
    }
    return answer;
}