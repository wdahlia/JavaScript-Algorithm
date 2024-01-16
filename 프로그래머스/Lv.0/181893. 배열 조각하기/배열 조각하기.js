function solution(arr, query) {
    let answer = arr;
    
    for (let i=0; i<query.length; i++) {
        i % 2 ? answer = answer.slice(query[i], answer.length) : answer = answer.slice(0, query[i] + 1);
    }
 
    return answer;
}