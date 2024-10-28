const fs = require ('fs');

let textIn = fs.readFileSync('./files/jemima.txt', 'utf-8');
console.log(textIn)

let content = 'My name is Jemima'
fs.writeFileSync('./files/sophia.docx', content);
