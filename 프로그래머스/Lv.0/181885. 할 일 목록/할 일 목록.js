function solution(todo_list, finished) {
    // isFinished => finished (true, false)
    // false인 배열을 가져올 것
    let answer = [];
    for (let i=0; i<finished.length; i++) {
        !finished[i] ? answer.push(todo_list[i]) : null;
    }
    return answer;
}