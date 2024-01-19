function solution(str_list, ex) {
    let answer = '';
    for (str of str_list) {
        str.includes(ex) ? null : answer += str;
    }
    return answer;
}