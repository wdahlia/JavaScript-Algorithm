function solution(num_list, n) {
    let answer = 0;
    num_list.includes(n) ? answer = 1 : null;
    return answer;
}