function solution(num_str) {
    let answer = 0;
    answer = [...num_str].reduce((accum, crnt) => accum += Number(crnt), 0);
    return answer;
}