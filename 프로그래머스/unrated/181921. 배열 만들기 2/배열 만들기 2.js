function solution(l, r) {
    let answer = [];
    for (let i=l; i<=r; i+=1){
        const num = i.toString();
        if ([...num].every(n => n === "0" || n === "5")) {
            answer.push(Number(num))
        } else {
            continue
        }
    }
    
    !(answer.length) ? answer = [-1] : answer;
    
    return answer;
} 