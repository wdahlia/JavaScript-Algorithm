function solution(date1, date2) {
    let answer = 0;
    const newDate1 = new Date(...date1);
    const newDate2 = new Date(...date2);

    newDate1 < newDate2 ? answer = 1 : null;
    
    return answer;
}