function solution(num_list, n) {
    // n번째 원소부터 마지막까지의 모든 원소를 담은 리스트 return
    let answer = [];
    
    for (let i=n-1; i < num_list.length; i++) {
        answer.push(num_list[i]);
    }
    
    return answer;
}