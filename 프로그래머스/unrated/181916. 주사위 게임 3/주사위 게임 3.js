function solution(a, b, c, d) {
    let answer = 0;
    const arr = [a, b, c, d];
    // 모두 같은 값 1111 x p
    // 세개의 숫자 p로 같고, 나머지 주사위 숫자 q, (10 x p + q)^2
    // 두개씩 같은 값 p, q, 나온 숫자 p,q (p + q) x |p - q|
    // 두개 p로 같고 나머지 두 숫자가 p와 다른 q,r 이면 q x r
    // 모두 다르다면 가장 작은 숫자
    
    function countNumber(array) {
        let indexObject = {};
        for (let i=0; i < array.length; i++) {
            if (!indexObject[array[i]]) {
                indexObject = { ...indexObject, [array[i]] : 1 };
            } else {
                indexObject = { ...indexObject, [array[i]] : indexObject[array[i]] += 1 };
            }
        }
        return indexObject
    }
    
    const indexObj = countNumber(arr);
    
    const minNum = Math.min(a, b, c, d);

    const objLen = Object.keys(indexObj).length;
    const obj = Object.keys(indexObj);
    const numObj = obj.map(ele => Number(ele));

    if (objLen === 1) {
        // 4개 값이 모두 동일한 경우
        answer = 1111 * Number(numObj[0])
    } else if (objLen === 2) {
        if (indexObj[numObj[0]] === 2 && indexObj[numObj[1]] === 2) {
            answer = (numObj[0] + numObj[1]) * Math.abs(numObj[0] - numObj[1]);
        } else {
            const p = indexObj[numObj[0]] === 3 ? numObj[0] : numObj[1];
            const q = indexObj[numObj[0]] === 3 ? numObj[1] : numObj[0];
            answer = (10 * p + q) ** 2
        }
    } else if (objLen === 3) {
        const p = indexObj[numObj[0]] === 2 ? numObj[0] : indexObj[numObj[1]] === 2 ? numObj[1] : numObj[2];
        const q = indexObj[numObj[0]] === 2 ? numObj[1] : indexObj[numObj[1]] === 2 ? numObj[2] : numObj[0];
        const r = indexObj[numObj[0]] === 2 ? numObj[2] : indexObj[numObj[1]] === 2 ? numObj[0] : numObj[1];
        
        answer = q * r;
    } else {
        answer = minNum;
    }
    
    return answer;
}