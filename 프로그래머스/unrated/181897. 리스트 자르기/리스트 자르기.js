function solution(n, slicer, num_list) {
    // n에 따라 조건 분리
    // slicer = [a, b, c]
    // n = 1, 0번 인덱스부터 b번 인덱스
    // n = 2, a번 인덱스부터 마지막 인덱스
    // n = 3, a번 인덱스부터 b번 인덱스
    // n = 4, a번 인덱스부터 b번 인덱스 c간격으로
    let answer = [];
    const [start, end, step] = [...slicer];
    
    
    if (n === 1) {
        answer = num_list.slice(0, end + 1) 
    } else if (n === 2) {
        answer = num_list.slice(start, num_list.length)
    } else if (n === 3) {
        answer = num_list.slice(start, end + 1)
    } else {
        for (let i = start; i <= end; i+=step) {
            answer.push(num_list[i]);
        }
    }
    
    
    return answer;
}