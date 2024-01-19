function solution(myString, pat) {
    let answer = 0;
    const newString = myString.replace(/[AB]/g, match => match === 'A' ? 'B' : 'A');
    newString.includes(pat) ? answer = 1 : null;
    return answer;
}