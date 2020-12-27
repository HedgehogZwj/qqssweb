var reqestOption = require('../config/container').reqestOption;
var client = require('../config/container').client;
var connection = require('../config/container').connection;
const container = require('rhea');
const crypto = require('crypto');

connection.open_receiver();
var lastid = 0;
function hmacSha1(key, context) {
    return Buffer.from(crypto.createHmac('sha1', key).update(context).digest())
        .toString('base64');
}
container.on('message', function (context) {
    var msg = context.message;
    var messageId = msg.message_id;
    if (lastid < messageId) lastid = messageId;
    else return;
    var topic = msg.application_properties.topic;
    var content = Buffer.from(msg.body.content).toString();
    if (content != "ZWJ IOT") {
        // console.log(content);
        if (content.includes("temp1", 0)) {
            // console.log(content);
            let start = content.indexOf("value\":");
            let end = content.indexOf(",", start);
            if (start != 0)
                AMQP.tem = Number.parseFloat(content.substr(start + 7, end - start - 7));
            // console.log(content.substr(start + 7, end - start - 7));
        }
        if (content.includes("humidity1", 0)) {
            let start = content.indexOf("value\":");
            let end = content.indexOf(",", start);
            if (start != 0)
                AMQP.humidity = Number.parseFloat(content.substr(start + 7, end - start - 7));
            // console.log(content.substr(start + 7, end - start - 7));
        }
    }
    // //发送ACK，注意不要在回调函数有耗时逻辑。
    context.delivery.accept();
});

var AMQP = {
    MINTEM: Number,
    MAXTEM: Number,
    tem: Number,
    HUM: Number,
    humidity: Number,
    SetLED(status, resp) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"LightStatus\":" + status + "}",
            "ProductKey": "a13FZl5d5Rq",
            "DeviceName": "led1",
            "LightStatus": status
        }
        // console.log(status);
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            console.log(JSON.stringify(result));
            if (resp)
                resp.end();
        }, (ex) => {
            if (resp)
                resp.end();
        });
    },
    SetTEMVAL(resp) {
        resp.send(JSON.stringify(this.tem))
        resp.end();
    },
    SetHUMVAL(resp) {
        resp.send(JSON.stringify(this.humidity));
        resp.end();
    },
    SetADDHUM(status, resp) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + "}",
            "ProductKey": "a1ZFfoK1zQB",
            "DeviceName": "humidifier",
            "PowerSwitch": status
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            if (resp)
                resp.end();
        }, (ex) => {
            if (resp)
                resp.end();
        });
    },
    SetWAR(status, resp) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + "}",
            "ProductKey": "a1mVKBkNuTc",
            "DeviceName": "warmer",
            "PowerSwitch": status
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            if (resp)
                resp.end();
        }, (ex) => {
            if (resp)
                resp.end();
        });
    },
    SetAIR(status, resp) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + "}",
            "ProductKey": "a1hwHN7K8vA",
            "DeviceName": "air-condition",
            "PowerSwitch": status
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            if (resp)
                resp.end();
        }, (ex) => {
            if (resp)
                resp.end();
        });
    },
    SetFAN(status, value, resp) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + ",\"WindSpeed\":" + value + "}",
            "ProductKey": "a14J7O6Lbst",
            "DeviceName": "fan1",
            "PowerSwitch": status,
            "WindSpeed": value
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            console.log(JSON.stringify(result));
            resp.end();
        }, (ex) => {
            resp.end();
        });
    },
    init() {
        if (this.MINTEM != null && this.MAXTEM != null) {
            // console.log("ssssss" + this.MINTEM + "asa" + this.MAXTEM + "sss" + this.tem + "\n");
            if (this.tem <= this.MINTEM) AMQP.SetWAR("1", ""), AMQP.SetAIR("0", "");
            else if (this.tem >= this.MAXTEM) AMQP.SetAIR("1", ""), AMQP.SetWAR("0", "");
        }
        if (this.humidity != '') {
            if (this.humidity <= this.HUM) AMQP.SetADDHUM("1", "");
        }
        setTimeout(() => { this.init(); }, 1000);
    }
}

module.exports = AMQP;