function solution(num_list) {
    // 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면
    const multiple = num_list.reduce((num, current) => num * current, 1);
    const sumValue = num_list.reduce((num, currentValue) => num + currentValue, 0)
    const sumSquare = Math.pow(sumValue, 2);
    let answer = 0;
    multiple < sumSquare ? answer = 1 : null
    return answer;
}