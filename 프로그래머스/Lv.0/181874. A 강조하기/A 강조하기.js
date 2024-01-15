function solution(myString) {
    // myString a만 대문자로 a 아닌건 전부다 소문자로;
    let answer = '';
    answer = myString.replace(/a/g, 'A');
    answer = answer.replace(/[B-Z]/g, function(match) {
        return match.toLowerCase();
    });
    return answer;
}