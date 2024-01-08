function solution(myString, pat) {
    let answer = 0;
    const new_strings = myString.toLowerCase();
    const new_pat = pat.toLowerCase();
    new_strings.includes(new_pat) ? answer = 1 : null;
    return answer;
}