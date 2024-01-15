function solution(arr, delete_list) {
    let answer = [];
    answer = [...arr];
    for (let i=0; i<delete_list.length; i++) {
        if (arr.includes(delete_list[i])) {
            const findIdx = answer.indexOf(delete_list[i]);
            answer.splice(findIdx, 1);
        }
    }
    console.log(answer)
    return answer;
}