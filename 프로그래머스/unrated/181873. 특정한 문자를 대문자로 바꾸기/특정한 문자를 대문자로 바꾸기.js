function solution(my_string, alp) {
    let answer = '';
    if (my_string.includes(alp)) {
        const alph = alp.toUpperCase();
        const regex = new RegExp(`${alp}`, 'g');
        const replaceText = my_string.replace(regex, alph);
        answer = replaceText;
    } else {
        answer = my_string;
    }
    return answer;
}