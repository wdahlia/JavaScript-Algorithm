function solution(str_list) {
    const lIdx = str_list.indexOf('l');
    const rIdx = str_list.indexOf('r');
    let answer;
    if (lIdx === -1 && rIdx === -1) {
        return [];
    } else if (lIdx !== -1 && rIdx !== -1) {
        answer = lIdx < rIdx ? str_list.slice(0, lIdx) : str_list.slice(rIdx + 1, str_list.length);
    } else {
        answer = lIdx !== -1 ? str_list.slice(0, lIdx) : str_list.slice(rIdx + 1, str_list.length)
    }

    return answer;
}