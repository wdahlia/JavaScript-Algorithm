function solution(num_list) {
    let answer = [];
    const sortedNumList = num_list.sort((a, b) => a - b);
    answer = sortedNumList.slice(5, sortedNumList.length);
    return answer;
}