var reqestOption = require('../config/container').reqestOption;
var client = require('../config/container').client;

var AMQP = {
    SetLED(status) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"LightStatus\":" + status + "}",
            "ProductKey": "a13FZl5d5Rq",
            "DeviceName": "led1",
            "LightStatus": status
        }
        console.log(status);
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        });
    },
    SetTEMVAL(value) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"CurrentTemperature\":" + value + "}",
            "ProductKey": "a1kblpmSRsx",
            "DeviceName": "temp1",
            "CurrentTemperature": value
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        });
    },
    SetHUMVAL(value) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"CurrentHumidity\":" + value + "}",
            "ProductKey": "a16XAMoOZ0s",
            "DeviceName": "humidity1",
            "CurrentHumidity": value
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        });
    },
    SetADDHUM(status) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + "}",
            "ProductKey": "a1ZFfoK1zQB",
            "DeviceName": "humidifier",
            "PowerSwitch": status
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        });
    },
    SetWAR(status) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + "}",
            "ProductKey": "a1mVKBkNuTc",
            "DeviceName": "warmer",
            "PowerSwitch": status
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        });
    },
    SetAIR(status) {
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + "}",
            "ProductKey": "a1hwHN7K8vA",
            "DeviceName": "air-condition",
            "PowerSwitch": status
        }
        client.request('SetDeviceProperty', params, reqestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        });
    },
    SetFAN(status, value) {
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
        }, (ex) => {
            console.log(ex);
        });
    }
}

module.exports = AMQP;