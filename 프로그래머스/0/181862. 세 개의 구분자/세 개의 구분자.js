function solution(myStr) {
    let answer = [];
    const splitStr = myStr.split(/[abc]/g).filter((item) => item !== '');
    !splitStr.length ? answer = ['EMPTY'] : answer = splitStr;
    return answer;
}