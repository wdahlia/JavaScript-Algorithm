function solution(arr1, arr2) {
    // 배열 길이 다를때, 길이가 긴 쪽이 더 큼
    // 배열 길이 같다면, 각 배열에 있는 모든 원소의 합 비교 다르면 더 큰쪽이 크고 같다면 같은것
    // arr2 크면 -1, arr1 크면 1, 두 배열 같다면 0
    let answer = 0;
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    
    function sumArray (arr) {
        let sumResult = 0;
        for (ele of arr) {
            sumResult += ele;
        }

        return sumResult;
    }
    
    if (arr1Len !== arr2Len) {
        arr1Len > arr2Len ? answer = 1 : arr1Len < arr2Len ? answer = -1 : null;
    } else {
        const totalArr1 = sumArray(arr1);
        const totalArr2 = sumArray(arr2);
        
        totalArr1 > totalArr2 ? answer = 1 : totalArr1 < totalArr2 ? answer = -1 : null;
    }
    
    return answer;
}