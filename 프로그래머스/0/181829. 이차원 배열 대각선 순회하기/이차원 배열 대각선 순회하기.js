function solution(board, k) {
    let answer = 0;
    const filterBoard = board.flatMap((item, i) => item.filter((num, j) => i + j <= k)).reduce((acc, curr) => answer += curr, answer)
    return answer;
}