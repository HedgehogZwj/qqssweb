const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

var router = require('./routers/IotRoutes')

app.use(bodyParser.json());
app.use(logger('dev'))
app.use(router);

app.listen(3000, () => {
    console.log('iot 服务器启动');
})