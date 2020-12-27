var user = require('../dao/database').user;
var device = require('../dao/database').device;
var AMQP = require('../controller/container')

AMQP.init();

var HUM;

var web = {
    login: function (req, resp) {
        const username = req.body.userName;
        const password = req.body.password;
        user.query(username, password, resp);
    },
    update: function (req, resp) {
        const username = req.body.userName;
        const password = req.body.password;
        user.update(username, password, resp)
    },
    query: function (req, resp) {
        device.query(req.params.id, req.params.type, resp);
    },
    delete: function (req, resp) {
        device.delete(req.params.id, req.params.type, resp);
    },
    updevice: function (req, resp) {
        device.update(req, resp);
    },
    add: function (req, resp) {
        device.insert(req, resp);
    },
    SetLED: function (req, resp) {
        AMQP.SetLED(req.body.status, resp);
    },
    SetFAN: function (req, resp) {
        var status = req.body.status;
        if (status > 0)
            AMQP.SetFAN(1, status, resp);
        else
            AMQP.SetFAN(0, 0, resp);
    },
    SetADDHUM: function (req, resp) {
        var status = req.body.status;
        AMQP.SetADDHUM(status, resp);
    },
    SetWAR: function (req, resp) {
        var status = req.body.status;
        AMQP.SetWAR(status, resp);
    },
    SetAIR: function (req, resp) {
        var status = req.body.status;
        AMQP.SetAIR(status, resp);
    },
    getTEM: function (req, resp) {
        AMQP.SetTEMVAL(resp);
    },
    getHUM: function (req, resp) {
        AMQP.SetHUMVAL(resp);
    },
    SetHUM: function (req, resp) {
        AMQP.HUM = req.body.value;
        AMQP.SetHUMVAL(resp);
    },
    SetMINTEM: function (req, resp) {
        AMQP.MINTEM = req.body.value;
        AMQP.SetTEMVAL(resp);
    },
    SetMAXTEM: function (req, resp) {
        AMQP.MAXTEM = req.body.value;
        AMQP.SetTEMVAL(resp);
    }
}

module.exports = web;