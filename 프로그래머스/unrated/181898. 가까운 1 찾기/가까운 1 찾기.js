function solution(arr, idx) {
    // arr 원소는 1또는 0 idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환
    // 없다면 -1 반환
    
    for (let i = idx; i < arr.length; i++) {
        if (arr[i]) {
            return i
        }
    }
    return -1
}