function solution(a, d, included) {
    let answer = 0;
    const arrayLen = included.length;
    const newArray = [...new Array(arrayLen)].map((_, i) =>
        a + ( d * i )
    );
    for (let i=0; i < arrayLen; i++) {
        included[i] && (answer += newArray[i] )
    }
    console.log(answer)
    return answer;
}