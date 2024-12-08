const http = require('http');
const port = 1000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }),
        res.write("<h1>Hi! My Name is Tae Seong</h1>"),
        res.end("<h1>Hello World!</h1>");
});

server.listen(port, () => {
    console.log(`server listens on port ${port}!`);
})