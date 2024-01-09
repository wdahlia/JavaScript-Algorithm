function solution(num_list) {
    // 가장 첫 번째 원소 1번 원소
    // 홀수 번째 원소들의 합, 짝수 번째 원소들의 합 중 큰 값 return
    let answer = 0;
    let sum_odd = 0;
    let sum_even = 0;
    for (let i=0; i < num_list.length; i++) {
        !(i % 2) ? sum_odd += num_list[i] : sum_even += num_list[i]
    }
    
    answer = Math.max(sum_odd, sum_even);
    
    return answer;
}