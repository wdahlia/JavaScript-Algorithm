function solution(arr) {
    // 50보다 크거나 같은 짝수 => 2로 나누기
    // 50보다 작은 홀수 => 2 곱하고 1 더함
    let answer = 0;
    let isStop = true;
    while (isStop) {
        answer += 1
        const array = [...arr];
        for (let i=0; i<arr.length; i++) {
            if (arr[i] >= 50 && !(arr[i] % 2))  {
                arr[i] /= 2
            } else if (arr[i] < 50 && arr[i] % 2) {
                arr[i] = arr[i] * 2 + 1
            }
        }
        
        // 배열 비교의 경우 JSON.stringify()로 직렬화해서 비교 하는 방법, every 메서드 사용하는 방법 존재
        const isEqual = JSON.stringify(arr) === JSON.stringify(array);
        if (isEqual) {
            isStop = false;
            answer -= 1;
        }
    }
    
    return answer;
}