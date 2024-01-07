function solution(start_num, end_num) {
    // start_num에서 end_num까지 1씩 감소하는 수들을 차례대로 담은 리스트를 return
    let answer = [];
    while (start_num >= end_num) {
        answer.push(start_num);
        --start_num;
    }
    
    return answer;
}