function solution(my_string, s, e) {
    let answer = '';
    const arr = [...my_string];
    const str = [...my_string].slice(s, e+1);
    const reverseStr = str.reverse();
    const resultStr = arr.splice(s, e-s+1, ...reverseStr);
    answer = arr.join('')
    return answer;
}