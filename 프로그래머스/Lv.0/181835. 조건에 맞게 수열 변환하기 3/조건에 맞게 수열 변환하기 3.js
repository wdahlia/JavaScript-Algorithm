function solution(arr, k) {
    let answer = [];
    // k 홀수 arr 모든 원소 * k
    // k 짝수 arr 모든 원소 + k
    
    for (ele of arr) {
        k % 2 ? answer.push(ele * k) : answer.push(ele + k);
    }
    return answer;
}