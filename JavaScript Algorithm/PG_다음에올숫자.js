
function solution(common) {
  let answer = 0;
  // 등차인지 등비인지 파악해야함
  if (common[2] - common[1] === common[1] - common[0]) {
      const dif = common[1] - common[0];
      answer = common.pop() + dif
  } else {
      const div = common[1] / common[0];
      answer = common.pop() * div
  }
  return answer;
}
