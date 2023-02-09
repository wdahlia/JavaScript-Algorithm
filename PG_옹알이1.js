
function solution(babbling) {
  let answer = 0;
  const wordLi = ['aya', 'ye', 'woo', 'ma'];
  // aya, ye, woo, ma 발음밖에 하지 못함 단어의 개수 return
  // 한 번씩만 등장 만약 aya와 ye가 한단어에 있다면 +1만 카운트
  for (let i=0; i < babbling.length; i++) {
      wordLi.forEach(word => {
          if (babbling[i].includes(word)) {
              babbling[i] = babbling[i].replace(word, '-');
          }
      });
      
      babbling[i] = babbling[i].replace(/\-/g, '');
      
      if (babbling[i] === '') {
          answer++;
      }
  };
  return answer;
}
