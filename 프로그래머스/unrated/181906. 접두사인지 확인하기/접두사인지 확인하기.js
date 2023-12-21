function solution(my_string, is_prefix) {
    let answer = 0;
    for (let i=0; i<my_string.length; i++) {
        const prefix = my_string.slice(0, i);
        prefix === is_prefix ? answer = 1 : null;
    }
    return answer;
}