const express = require('express');
const app = express();
const logger = require('morgan');//日志信息
const bodyParser = require('body-parser');//json

var router = require('./routers/IotRoutes');//路由配置



app.use(bodyParser.json());
app.use(logger('dev'))
app.use(router);

app.listen(3000, () => {
    console.log('iot 服务器启动');
})