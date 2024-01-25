function solution(arr, k) {
    let answer = [];
    for (num of arr) {
        if (!answer.includes(num)) {
            answer.push(num)
        } 
        
        if (answer.length === k) {
            return answer
        }
    }
    
    if (answer.length !== k) {
        const dummyArr = new Array(k - answer.length).fill(-1);
        answer = [...answer, ...dummyArr];
    }
    return answer;
}