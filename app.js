const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan')

app.use(logger('dev'))
app.use(bodyParser.json());

//跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization,Accept, X - Requested - With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);
    else next();
});

app.use();


app.listen(3000, () => {
    console.log('Web 服务器启动');
})
