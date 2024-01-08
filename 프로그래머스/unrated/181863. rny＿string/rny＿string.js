function solution(rny_string) {
    
    // m을 모두 rn으로 바꾸기
    
    let answer = '';
    
    answer = rny_string.replace(/m/g, 'rn');
    
    return answer;
}