function solution(a, b) {
    let answer = 0; 
    const stringA = String(a);
    const stringB = String(b);
    const sumAB = Number(stringA + stringB);
    const sumBA = Number(stringB + stringA);
    
    sumAB > sumBA ? answer = sumAB : answer = sumBA;
    
    return answer;
}