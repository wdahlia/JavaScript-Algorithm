function solution(myString) {
    // myString a만 대문자로 a 아닌건 전부다 소문자로;
    let answer = myString.replace(/[aB-Z]/g, function(match) {
        return match === 'a' ? 'A' : match.toLowerCase();
    });
    return answer;
}