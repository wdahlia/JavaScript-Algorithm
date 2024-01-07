function solution(arr, intervals) {
    let answer = [];
    for (interval of intervals) {
        const [start, end] = [...interval];
        const sliceArr = arr.slice(start, end + 1);
        answer.push(...sliceArr)
    }
    return answer;
}