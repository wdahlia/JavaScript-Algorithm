function solution(arr) {
    // arr 행의 수가 더 많다면, 열의 수 = 행의 수 행의 끝 0 추가
    // ... 열의 수가 더 많다면, 열의 수 = 행의 수 열의 끝 0 추가
    const rowNum = arr.length;
    const colNum = arr[0].length;
    const num = rowNum >= colNum ? rowNum : colNum;
    let answer = new Array(num).fill(0).map((n, i) => {
        if (!arr[i]) {
            return new Array(num).fill(0)
        } else {
            const dummyArr = new Array(num - colNum).fill(0);
            return [...arr[i], ...dummyArr];
        }
    });
    return answer
}