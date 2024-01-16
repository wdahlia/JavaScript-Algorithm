function solution(my_string) {
    let answer = [];
    answer = my_string.split(" ");
    answer = answer.filter((str) => str !== "");
    return answer;
}