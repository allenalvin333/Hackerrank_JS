// https://www.hackerrank.com/challenges/js10-if-else

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    grade = 'FFEDCBA'[Math.ceil(score/5.0)];
    // Write your code here
    return grade;
}

function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}