function solution(my_string, k) {
    let answer = '';
    Array.from({ length : k }, (_, i) => {
        answer += my_string
    })
    return answer;
}