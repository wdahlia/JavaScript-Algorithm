function solution(num_list, n) {
    let answer = [];
    const connectArr = num_list.slice(0, n);
    answer = num_list.slice(n, num_list.length);
    answer = [...answer, ...connectArr]
    return answer;
}