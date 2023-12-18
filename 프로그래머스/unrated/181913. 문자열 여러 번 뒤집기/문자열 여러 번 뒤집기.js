function solution(my_string, queries) {
    let answer = '';
    let stringArr = [...my_string]
    for (let i=0; i < queries.length; i++) {
        const reverseString = stringArr.slice(queries[i][0], queries[i][1] + 1).reverse();
        stringArr.splice(queries[i][0], reverseString.length, reverseString)
        const arr = stringArr.flat();
        const res = arr.join('');
        stringArr = [...res];
    }
    answer = stringArr.join('')
    return answer;
}