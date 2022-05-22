const path = require('path')

//console.log(path.sep);

const filePath = path.join('/content', 'subfolder/', 'text.text')
//console.log(filePath);


const xyz = path.basename(filePath, '.text')

//console.log(xyz);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text,text')
console.log(absolute)