function solution(n_str) {
    let answer = '';
    const n_strArr = [...n_str];
    const firstIdx = n_str[0];
    let popNumStr = '0';
    
    if (firstIdx === '0') {
        while (popNumStr === '0') {
            answer = n_strArr;
            n_strArr.shift();
            popNumStr = n_strArr[0];
        }
        
    } else {
        answer = n_strArr;
    }
    
    answer = answer.join('');
   
    return answer;
}