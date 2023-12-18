function solution(arr) {
    let stk = [];
    let i = 0;
    // i가 arr의 길이보다 작으면 반복
    while (i < arr.length) {
        if (!(stk.length)) {
            stk.push(arr[i]);
            i++;
        } else if (stk.length && stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else if (stk.length && stk[stk.length - 1] >= arr[i]) {
            stk.pop();
        }

    }
    return stk;
}