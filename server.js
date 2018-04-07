const http = require('http');
const operations = require('./operations.js');
console.log(operations.var1);
console.log(operations.var2);
const funcoes = require('./parouimpar.js');
const resultado = funcoes(1);
console.log(resultado.msg, resultado.value);
const server = http.createServer((request, response)=>{
console.log('Servidor acessado!');
const headers = request.headers;
const method = request.method;
const url = request.url;
console.log("Headers");
console.log(headers);
console.log("Method: " + method);
console.log("URL: " + url);
if (request.url == '/teste') {
response.setHeader('Content-type', 'text/html');
response.end('<h1 style="color:DarkBlue">Olá Mundo</h1>')
}else if (request.url == '/json') {
response.setHeader('Content-type', 'application/json');
const data = {
id: 1,
name: "user"
};
response.end(JSON.stringify(data));
}else{
	response.setHeader('Content-type', 'text/html');
	response.end('<h1>URL NÃO ENCONTRADA!</h1>')
	}

});
server.listen(3000);