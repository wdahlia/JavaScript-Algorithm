function solution(str1, str2) {
    let answer = 0;
    const str1Len = str1.length;
    for (let i=0; i < str2.length; i++) {
        const sliceStr = str2.slice(i, i + str1Len);
        str1 === sliceStr ? answer = 1 : null;
    }
    return answer;
}