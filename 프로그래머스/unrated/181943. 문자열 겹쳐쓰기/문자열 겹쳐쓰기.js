function solution(my_string, overwrite_string, s) {
    // my_string, overwrite_string은 문자열
    // s는 정수
    // my string의 인덱스 s 부터 overwrite_string.length만큼을 overwrite_string으로 바꾸기
    let answer = '';
    
    // 반복문 사용 - 파이썬 느낌의 풀이
    // let j = 0;
    // for (let i=0; i < my_string.length; i++) {
    //     if (i >= s && i < s + overwrite_string.length) {
    //         answer += overwrite_string[j];
    //         j += 1
    //     } else {
    //         answer += my_string[i]
    //     }
    // }

    // splice method 사용
    const sentence = [...my_string];
    sentence.splice(s, overwrite_string.length, overwrite_string);
    answer = sentence.join("");
    
    return answer;
}