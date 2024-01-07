function solution(num_list) {
    // num_list에서 첫 번째로 나오는 음수의 인덱스 return
    // 음수 없다면 -1 return
    let answer = -1;
    for (num of num_list) {
        if (num < 0) {
            answer = num_list.indexOf(num)
            return answer
        }
    }
    return answer;
}