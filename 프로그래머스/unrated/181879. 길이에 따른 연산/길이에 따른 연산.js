function solution(num_list) {
    // list length >= 11 모든 원소 합
    // list length <= 10 모든 원소 곱
    let answer = 0;
    
    function calculate (sum) {
        for (num of num_list) {
            sum ? answer += num : answer *= num
        }
    }

    if (num_list.length >= 11) {
        calculate(true);
    } else { 
        answer = 1;
        calculate(false);
    }
    return answer;
}