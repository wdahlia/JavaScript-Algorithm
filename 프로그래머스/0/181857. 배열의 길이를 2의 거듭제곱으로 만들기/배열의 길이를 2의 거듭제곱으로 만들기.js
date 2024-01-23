function solution(arr) {
    let answer = [...arr];
    const isSqrt = Math.sqrt(arr.length) % 2 ? false : true;
    if (isSqrt) { 
        return answer;
    } else {
        let num = 1;
        while (arr.length > num) {
            num *= 2
        }
        const diffLen = num - arr.length;
        const diffArr = new Array(diffLen).fill(0);
        answer = [...answer, ...diffArr]
        return answer
    }
}