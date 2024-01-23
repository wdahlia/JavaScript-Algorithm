function solution(strArr) {
    let answer = 0;
    let lenObj = {};
    
    for (str of strArr) {
        const strLen = str.length;
        if (!(lenObj[strLen])) {
            lenObj = { ...lenObj, [strLen] : 1 };
        } else {
            lenObj = { ...lenObj, [strLen] : lenObj[strLen] += 1 };
        }
    }
    
    answer = Math.max(...Object.values(lenObj))
    
    return answer;
}