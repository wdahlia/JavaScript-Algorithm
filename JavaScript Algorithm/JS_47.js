
// set 자료형의 응ㅛ

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};

let result = new Set();

for (let k in people) {
  result.add(people[k]);
}

console.log(result.size); // set에 몇개 들었는지 출력