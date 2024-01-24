function solution(arr) {
    // 빈배열이라면 stk에 arr[i] 추가
    // stk 원소 있고 마지막 원소 arr[i] 같으면 pop
    // stk 원소 있고 마지막 원소 arr[i] 다르면 arr[i] 추가
    let answer = [];
    
    for (let i=0; i<arr.length; i++) {
        if (answer.length) {
            const len = answer.length - 1;
            arr[i] === answer[len] ? answer.pop() : answer.push(arr[i])
        } else {
            answer.push(arr[i])
        }
    }
    
    !answer.length ? answer.push(-1) : null;
    
    return answer;
}