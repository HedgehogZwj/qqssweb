var data = require('../dao/database').data;
var message = require('../controller/device');

var iot = {
    led: function (req, resp) {
        const id = req.params['id'];
        const status = req.params['status'];
        data.insert(id, "led", status);
        message.postLED(Number(status));
        const obj = {
            id: id,
            success: true,
            status: message.aliLedStatus
        };
        resp.write(JSON.stringify(obj));
        resp.end();
    },
    tem: function (req, resp) {
        const id = req.params['id'];
        const value = req.params['value'];
        data.insert(id, "tem", value);
        message.postTEM(Number(value));
        const obj = {
            id: id,
            success: true,
            value: message.alitemvalue
        };
        resp.write(JSON.stringify(obj));
        resp.end();
    },
    hum: function (req, resp) {
        const id = req.params['id'];
        const value = req.params['value'];
        data.insert(id, "hum", value);
        message.postHUM(Number(value));
        const obj = {
            id: id,
            success: true,
            status: message.alihumvalue
        };
        resp.write(JSON.stringify(obj));
        resp.end();
    },
    air: function (req, resp) {
        const id = req.params['id'];
        const status = req.params['status'];
        data.insert(id, "air", status);
        message.postAIR(Number(status));
        const obj = {
            id: id,
            success: true,
            status: message.aliairStatus
        };
        resp.write(JSON.stringify(obj));
        resp.end();
    },
    fan: function (req, resp) {
        const id = req.params['id'];
        var status = req.params['status'];
        data.insert(id, "fan", status);
        message.postFAN(Number(status));
        if (message.alifanStatus != 0) status = message.alifanvalue;
        console.log(message.alifanvalue)
        const obj = {
            id: id,
            success: true,
            status: status
        };
        resp.write(JSON.stringify(obj));
        resp.end();
    },
    warm: function (req, resp) {
        const id = req.params['id'];
        const status = req.params['status'];
        data.insert(id, "warm", status);
        message.postWAR(Number(status));
        const obj = {
            id: id,
            success: true,
            status: message.aliwarStatus
        };
        resp.write(JSON.stringify(obj));
        resp.end();
    },
    addhum: function (req, resp) {
        const id = req.params['id'];
        const status = req.params['status'];
        data.insert(id, "addhum", status);
        message.postADDHUM(Number(status));
        const obj = {
            id: id,
            success: true,
            status: message.alihumidifierStatus
        };
        resp.write(JSON.stringify(obj));
        resp.end();
    }
}

module.exports = iot;