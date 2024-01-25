function solution(rank, attendance) {
    // 참여 가능 학생 중 등수가 높은 3명 선발
    // 10000 x a + 100 x b + c return
    const [a, b, c] = rank.filter((per, i) => attendance[i]).sort((a, b) => a - b).map((item) => rank.indexOf(item)).slice(0, 3);
    let answer = 10000 * a + 100 * b + c;
    return answer;
}