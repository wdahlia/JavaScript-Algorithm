function solution(num_list) {
    // 마지막 원소가 그 전 원소보다 크면 마지막 원소에서 그 전 원소를 뺀 값 push
    // 크지 않다면 마지막원소 두배 한 값 push
    let answer = [];
    answer = [...num_list];
    const arrLen = num_list.length;
    const last = num_list[arrLen - 1];
    const next = num_list[arrLen - 2];
    
    last > next ? answer.push(last - next) : answer.push(last * 2);
    
    return answer;
}