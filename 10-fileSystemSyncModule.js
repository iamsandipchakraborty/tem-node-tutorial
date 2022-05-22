const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/firstFile.txt', 'utf8')
const second = readFileSync('./content/secondFile.txt', 'utf8')
const third = readFileSync('./content/subfolder/thirdFile.txt', 'utf8')

console.log(first, second, third)



writeFileSync('./content/subfolder/thirdFile.txt', `This is the third file: ${first}, ${second}`, {flag: 'a'})


console.log('done woth the task');
console.log('starting with the next one');