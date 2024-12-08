const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.status(200).send('<h1>Welcome</h1>');
// })

// app.get('/login', (req, es) => {
//     res.status(200).send('<h1>login</h1>');
// })

app.use(function (req, res, next) {
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;

    //res.writeHead(200, { 'Content-Type': 'text/html:charset=utf-8' });
    res.status(200).send(`<h1>Express 서버에서 응답한 결과</h1><div><p>User-Agent: ${userAgent}</p></div><div><p>Param name: ${paramName}</p></div>`);
    res.end();
})

app.listen(3000);