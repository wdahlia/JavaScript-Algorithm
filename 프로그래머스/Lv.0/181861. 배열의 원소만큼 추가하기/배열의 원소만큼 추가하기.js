function solution(arr) {
    let answer = [];
    let idx = 0;
    for (num of arr) {
        const createNumArr = Array(num).fill(num);
        answer.splice(idx, num, ...createNumArr);
        idx += num;
    }
    return answer; 
}