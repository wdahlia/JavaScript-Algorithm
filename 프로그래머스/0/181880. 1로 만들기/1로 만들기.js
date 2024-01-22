function solution(num_list) {
    // 1이 될때까지의 횟수
    // 짝수 /2 홀수 -1 후 /2
    let answer = 0;
    for (num of num_list) {
        let divNum = num;
        while (divNum !== 1) {
            divNum % 2 ? divNum = (divNum - 1) / 2 : divNum = divNum / 2
            answer += 1;
        }
    }
    return answer;
}