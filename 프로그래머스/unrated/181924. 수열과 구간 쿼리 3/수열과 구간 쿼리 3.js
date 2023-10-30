function solution(arr, queries) {
    let answer = [...arr];
    for (const query of queries) {
        // 서로 맞교환
        const first = query[0];
        const second = query[1];
        [answer[first], answer[second]] = [answer[second], answer[first]];
    }
    return answer;
}