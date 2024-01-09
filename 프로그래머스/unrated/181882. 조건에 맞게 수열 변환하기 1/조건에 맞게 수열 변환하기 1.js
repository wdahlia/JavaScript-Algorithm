function solution(arr) {
    // arr 각 원소에 대해 50보다 크거나 같은 짝수다 /2
    // 50보다 작은 홀수 *2
    let answer = [];
    
    for (num of arr) {
        num >= 50 && !(num % 2) ? answer.push(num / 2) : 
        num < 50 && num % 2 ? answer.push(num * 2) : 
        answer.push(num)
    }
    return answer;
}