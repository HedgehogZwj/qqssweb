const container = require('rhea');
const crypto = require('crypto');
const Core = require('@alicloud/pop-core');

var dt = new Date();
var connection = container.connect({
    //接入域名，请参见AMQP客户端接入说明文档。
    'host': '1860168617568545.iot-amqp.cn-shanghai.aliyuncs.com',
    'port': 5671,
    'transport': 'tls',
    'reconnect': true,
    'idle_time_out': 60000,
    //userName组装方法，请参见AMQP客户端接入说明文档。其中的iotInstanceId，购买的实例请填写实例ID，公共实例请填空字符串""。
    'username': 'F8-28-19-D6-EE-A7|authMode=aksign,signMethod=hmacsha1,timestamp=' + dt.getTime() + ',authId=LTAI4FomDmD588HSFQASgsKD,iotInstanceId=,consumerGroupId=DEFAULT_GROUP|',
    //计算签名，password组装方法，请参见AMQP客户端接入说明文档。
    'password': hmacSha1('QorOFhTvNEVMOeukBFBcgtZyRHi2ta', 'authId=LTAI4FomDmD588HSFQASgsKD&timestamp=' + dt.getTime()),
});
// connection.open_sender();
//接收云端推送消息的回调函数

function hmacSha1(key, context) {
    return Buffer.from(crypto.createHmac('sha1', key).update(context).digest())
        .toString('base64');
}

var client = new Core({
    accessKeyId: 'LTAI4FomDmD588HSFQASgsKD',
    accessKeySecret: 'QorOFhTvNEVMOeukBFBcgtZyRHi2ta',
    endpoint: 'https://iot.cn-shanghai.aliyuncs.com',
    apiVersion: '2018-01-20'
});
var reqestOption = {
    method: 'POST'
};

module.exports = {
    client: client,
    reqestOption: reqestOption,
    connection: connection
}
