function solution(arr) {
    let answer = 0;
    const rowNum = arr.length;
    const columnNum = arr[0].length;
    
    for (let i=0; i<rowNum; i++) {
        for (let j=0; j<columnNum; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return answer;
            }
        }
    }
    
    answer = 1;
    
    return answer;
}