function solution(picture, k) {
    // 가로 세로 k배 늘린 그림 파일 문자열 배열 return
    let answer = [];
    for (let i=0; i<picture.length * k; i++) {
    const dupContent = picture[Math.floor(i/k)].replaceAll('.', '.'.repeat(k)).replaceAll('x', 'x'.repeat(k))
    answer.push(dupContent);
    }
   
    return answer;
}