function solution(myString) {
    let answer = [];
    const splitString = myString.split("x");
    for (str of splitString) {
        answer.push(str.length);
    }
    return answer;
}