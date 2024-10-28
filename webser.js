

var webser = require('http');// you can also use let or const

const jema = webser.createServer((request, response) =>{
    response.end('<h1>babcock university!!!!!!!!!</h1>')
    console.log('a request was sent')
});

jema.listen(70, 'localhost', () => {
    console.log('server started!!!')

});
