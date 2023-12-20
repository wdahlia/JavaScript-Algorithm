function solution(intStrs, k, s, l) {
    let answer = [];
     
    intStrs.forEach(ele => {
        const newInt = Number(ele.slice(s, s+l));
        k < newInt && answer.push(newInt);
    })
    
    return answer;
}