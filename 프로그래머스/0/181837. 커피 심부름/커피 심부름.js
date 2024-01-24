function solution(order) {
    // 아메리카노, 라테 4500, 5000
    // 메뉴만 적었다면 차가운것으로 통일
    // 아무거나 적었다면 아이스아메리카노로 통일
    let answer = 0;
    
    for (menu of order) {
        const isAmericano = (menu.includes('americano') || menu === 'anything') ? 4500 : 5000;
        answer += isAmericano;
    }
    return answer;
}