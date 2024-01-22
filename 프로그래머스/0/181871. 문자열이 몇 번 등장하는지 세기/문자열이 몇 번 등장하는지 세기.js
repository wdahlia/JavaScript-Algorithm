function solution(myString, pat) {
    let answer = 0;
    for (let i=0; i<=myString.length - pat.length; i++) {
        const word = [...myString].slice(i, i+pat.length).join('');
        word === pat ? answer += 1 : null;
    }
    return answer;
}