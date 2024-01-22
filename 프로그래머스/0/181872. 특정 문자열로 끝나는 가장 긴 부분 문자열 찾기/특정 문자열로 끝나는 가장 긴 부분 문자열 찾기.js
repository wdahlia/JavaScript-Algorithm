function solution(myString, pat) {
    let answer = '';
    const findIdx = myString.lastIndexOf(pat);
    answer = myString.slice(0, findIdx + pat.length);
    return answer;
}