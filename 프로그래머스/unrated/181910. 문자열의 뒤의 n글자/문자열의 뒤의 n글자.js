function solution(my_string, n) {
    let answer = '';
    const strStartLen = my_string.length - n;
    const strEndLen = strStartLen + n;
    answer = my_string.slice(strStartLen, strEndLen);
    return answer;
}