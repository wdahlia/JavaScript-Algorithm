function solution(my_string) {
    // 97부터 122까지가 a-z
    const answer = Array(52).fill(0);
    for (str of my_string) {
        let idx;
        if (str.codePointAt() >= 97) { 
            idx = str.codePointAt() - 97 + 26;
        } else {
            idx = str.codePointAt() - 65;
        }
        answer[idx] += 1;
    }
    return answer;
}