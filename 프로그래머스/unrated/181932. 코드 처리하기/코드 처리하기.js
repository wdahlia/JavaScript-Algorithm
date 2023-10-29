function solution(code) {
    // 앞에서부터 읽어내려가면서 문자 1이면 mode 바꿈
    // mode는 0 이나 1
    // 시작 할 때는 mode는 0
    // mode가 0이면, idx 짝수일때만 추가 "1" 만나면 mode 1로 바꿈
    // mode 1이면, idx 홀수일떄만 추가 "1" 만나면 mode 0으로 바꿈
    let answer = '';
    let mode = 0;
    for (let i=0; i < code.length; i++) {
        if (code[i] === "1") {
            mode ? mode = 0 : mode = 1;
        } else {
            if (mode && (i % 2)) {
                answer += code[i]
            } else if (!mode && !(i % 2)) {
                answer += code[i]
            }
        }
    }
    answer.length ? answer = answer : answer = "EMPTY"
    return answer;
}