function solution(num_list) {
    let answer = 0;
    let evenNum = ''; // 짝
    let oddNum = ''; // 홀
    
    for (const num of num_list) {
        num % 2 ? oddNum += num.toString() : evenNum += num.toString();
    }
    
    answer = Number(evenNum) + Number(oddNum);
    
    return answer;
}