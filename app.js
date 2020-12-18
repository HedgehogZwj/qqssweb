const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('./routers/WebRouters');

app.use(express.static(__dirname + '/static'));
app.use(logger('dev'))
app.use(bodyParser.json());
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(router);
//跨域
/*
key
air PowerSwitch
fan PowerSwitch开关  WindSpeed风速0-自动 1-低
humidifier PowerSwitch
hum CurrentHumidity
tem CurrentTemperature
war PowerSwitch
*/
app.listen(8000, () => {
    console.log('Web 服务器启动');
})
