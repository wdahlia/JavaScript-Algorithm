
// Day 1

// 1. 문자열 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    // interface가 내장한 이벤트를 실행
    // line이벤트는 입력 스트림이 줄 끝 입력 (\ n, \ r 또는 \ r \ n)을 수신 할 때마다 발생되는데, 줄 끝 입력은 보통 사용자가 Enter 또는 Return을 누를 때 발생한다. 콜백 함수는 한 줄의 수신 된 입력내용을 문자열타입의 파라미터로 받으며 호출된다.
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str)
});

// 2. a와 b 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log('a = ' + Number(input[0]));
    console.log('b = ' + Number(input[1]));
});

// 3. 문자열 반복해서 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let result = ''
    for (let i=0; i < Number(input[1]); i++) {
        result += input[0]
    }
    console.log(result)
});

// 4. 대소문자 바꿔서 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let result = ''
    for (const alph of input[0]) {
        alph === alph.toUpperCase() 
            ? 
            result += alph.toLowerCase()
            :
            result += alph.toUpperCase()
    }
    console.log(result)
});

// 5. 특수문자 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log('!@#$%^&*(\\\'"<>?:;')
});