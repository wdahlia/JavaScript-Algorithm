function solution(myString) {
    let answer = '';
    const value = 'l'.charCodeAt();
    answer = myString.replaceAll(/[a-zA-Z]/g, str => str.charCodeAt() < value ? str = 'l' : str ) 
    return answer;
}