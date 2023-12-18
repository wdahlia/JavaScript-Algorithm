function solution(n) {
    // x 짝수일 때, 2로 나누기
    // x 홀수일 때, 3 * x + 1로 바꾸는 계산
    // 결국 x는 1이 되는지
    // 초기값이 n인 콜라츠 수열 return
    const answer = [];
    answer.push(n);
    let number = n;
    
    while (number !== 1) {
        if (!(number % 2)) {
            const divNum = number / 2;
            console.log(divNum)
            answer.push(divNum);
            number = divNum;
        } else {
            const tripleNum = 3 * number + 1;
            answer.push(tripleNum);
            number = tripleNum;
        } 
    }
    return answer;
}