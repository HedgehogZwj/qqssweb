var user = require('../dao/database').user;
var device = require('../dao/database').device;
var AMQP = require('../controller/container')

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
        console.log('显示所有')
        device.query(req.params.id, req.params.type, resp);
    },
    delete: function (req, resp) {
        device.delete(req.params.id, req.params.type);
    },
    updevice: function (req, resp) {
        device.update(req, resp);
    },
    add: function (req, resp) {
        device.insert(req, resp);
    },
    SetLED: function (req, resp) {
        AMQP.SetLED(req.body.status);
    },
    SetFAN: function (req, resp) {
        var status = req.body.status;
        if (status > 0)
            AMQP.SetFAN(1, status);
        else
            AMQP.SetFAN(0, 0);
    }
}

module.exports = web;