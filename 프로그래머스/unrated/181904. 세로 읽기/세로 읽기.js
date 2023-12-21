function solution(my_string, m, c) {
    let answer = '';
    for (i=c-1; i<my_string.length; i+=m) {
        answer += my_string[i]
    }
    return answer;
}