function solution(my_string) {
    let answer = [];

    for (let i=0; i<my_string.length; i++) {
        const suffix = my_string.slice(i, my_string.length);
        answer.push(suffix)
    }
    answer.sort();
    return answer;
}