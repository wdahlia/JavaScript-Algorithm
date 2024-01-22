function solution(arr, flag) {
    // flag[i] arr[i] * 2
    // !flag[i] 마지막 arr[i]개의 원소 제거 
    let answer = [];
    for(let i=0; i<arr.length; i++) {
        if (flag[i]) {
            const newArray = new Array(arr[i] * 2).fill(arr[i]);
            answer = [...answer, ...newArray];
        } else {
            answer = answer.slice(0, answer.length - arr[i]);
        }
    }
    return answer;
}