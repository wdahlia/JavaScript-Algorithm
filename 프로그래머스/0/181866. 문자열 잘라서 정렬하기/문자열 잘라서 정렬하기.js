function solution(myString) {
    let answer = [];
    answer = myString.split('x').filter(content => content !== "").sort();
    return answer;
}