//导入设备
var device1 = require('../config/device').led1;//灯
var device2 = require('../config/device').temp1;//温度传感器
var device3 = require('../config/device').humidity1;//湿度传感器
var device4 = require('../config/device').humidifier;//加湿器
var device5 = require('../config/device').warmer;//取暖器
var device6 = require('../config/device').airconditioner;//空调
var device7 = require('../config/device').fan1;//电风扇

//配置Topic
const ledSubTopic = '/a13FZl5d5Rq/led1/user/get';
const temSubTopic = '/a1kblpmSRsx/temp1/user/get';
const humSubTopic = '/a16XAMoOZ0s/humidity1/user/get';
const humidifierSubTopic = '/a1ZFfoK1zQB/humidifier/user/get';
const warSubTopic = '/a1mVKBkNuTc/warmer/user/get';
const airSubTopic = '/a1hwHN7K8vA/air-condition/user/get';
const fanSubTopic = '/a14J7O6Lbst/fan1/user/get';

//连接阿里云
device1.on('connect', () => {
    device1.subscribe(ledSubTopic);
    device1.publish('/a13FZl5d5Rq/led1/user/update', 'ZWJ IOT');
})
device2.on('connect', () => {
    device2.subscribe(temSubTopic);
    device2.publish('/a1kblpmSRsx/temp1/user/update', 'ZWJ IOT');
})
device3.on('connect', () => {
    device3.subscribe(humSubTopic);
    device3.publish('/a16XAMoOZ0s/humidity1/user/update', 'ZWJ IOT');
})
device4.on('connect', () => {
    device4.subscribe(humidifierSubTopic);
    device4.publish('/a1ZFfoK1zQB/humidifier/user/update', 'ZWJ IOT');
})
device5.on('connect', () => {
    device5.subscribe(warSubTopic);
    device5.publish('/a1mVKBkNuTc/warmer/user/update', 'ZWJ IOT');
})
device6.on('connect', () => {
    device6.subscribe(airSubTopic);
    device6.publish('/a1hwHN7K8vA/air-condition/user/update', 'ZWJ IOT');
})
device7.on('connect', () => {
    device7.subscribe(fanSubTopic);
    device7.publish('/a14J7O6Lbst/fan1/user/update', 'ZWJ IOT');
})



//信息结构
var message = {
    aliLedStatus: Number,
    alihumvalue: Number,
    alitemvalue: Number,
    alihumidifierStatus: Number,
    aliwarStatus: Number,
    aliairStatus: Number,
    alifanStatus: Number,
    alifanvalue: Number,
    postLED() {
        device1.postProps({
            LightStatus: Number(this.aliLedStatus)
        }, (res) => { })
    },
    postTEM() {
        device2.postProps({
            CurrentTemperature: Number(this.alitemvalue)
        }, (res) => { })
    },
    postHUM() {
        device3.postProps({
            CurrentHumidity: Number(this.alihumvalue)
        }, (res) => { console.log(res.message) })
    },
    postADDHUM() {
        device4.postProps({
            PowerSwitch: Number(this.alihumidifierStatus)
        }, (res) => { })
    },
    postWAR() {
        device5.postProps({
            PowerSwitch: Number(this.aliwarStatus)
        }, (res) => { })
    },
    postAIR() {
        device6.postProps({
            AirConElectricMeterSwitch: Number(this.aliairStatus)
        }, (res) => { })
    },
    postFAN() {
        device7.postProps({
            PowerSwitch: Number(this.alifanStatus),
            WindSpeed: Number(this.alifanvalue)
        }, (res) => { })
    },
}


//赋值
device1.on('message', (topic, payload) => {
    if (topic === ledSubTopic) {
        message.aliLedStatus = Number(payload);
    }
});
// device2.on('message', (topic, payload) => {
//     if (topic === temSubTopic) {
//         message.alitemvalue = Number(payload);
//     }
// });
// device3.on('message', (topic, payload) => {
//     if (topic === humSubTopic) {
//         message.alihumvalue = Number(payload);
//     }
// });
device4.on('message', (topic, payload) => {
    if (topic === humidifierSubTopic) {
        message.alihumidifierStatus = Number(payload);
    }
});
device5.on('message', (topic, payload) => {
    if (topic === warSubTopic) {
        message.aliwarStatus = Number(payload);
    }
});
device6.on('message', (topic, payload) => {
    if (topic === airSubTopic) {
        message.aliairStatus = Number(payload);
    }
});
device7.on('message', (topic, payload) => {
    if (topic === fanSubTopic) {
        // console.log(payload)
        message.alifanStatus = Number(payload);
    }
});


device1.onProps((cmd) => {
    for (var key in cmd.params) {
        if (key == 'LightStatus') {
            console.log('set property', key);
            message.aliLedStatus = Number(cmd.params.LightStatus);
            message.postLED();
        }
    }
})
// device2.onProps((cmd) => {
//     for (var key in cmd.params) {
//         if (key == 'CurrentTemperature') {
//             tem = Number(cmd.params.CurrentTemperature);
//             console.log("come " + tem);
//         }
//     }
// })
// device3.onProps((cmd) => {
//     for (var key in cmd.params) {
//         if (key == 'CurrentHumidity') {
//             console.log('set property', key);
//             message.alihumvalue = Number(cmd.params.CurrentHumidity);
//             message.postHUM();
//         }
//     }
// })
device4.onProps((cmd) => {
    for (var key in cmd.params) {
        if (key == 'PowerSwitch') {
            console.log('set property', key);
            message.alihumidifierStatus = Number(cmd.params.PowerSwitch);
            message.postADDHUM();
        }
    }
})
device5.onProps((cmd) => {
    for (var key in cmd.params) {
        if (key == 'PowerSwitch') {
            console.log('set property', key);
            message.aliwarStatus = Number(cmd.params.PowerSwitch);
            message.postWAR();
        }
    }
})
device6.onProps((cmd) => {
    for (var key in cmd.params) {
        if (key == 'PowerSwitch') {
            console.log('set property', key);
            message.aliairStatus = Number(cmd.params.PowerSwitch);
            message.postAIR();
        }
    }
})
device7.onProps((cmd) => {
    for (var key in cmd.params) {
        if (key == 'PowerSwitch') {
            console.log('set property', key);
            message.alifanStatus = Number(cmd.params.PowerSwitch);
        }
        if (key == 'WindSpeed') {
            console.log('set property', key);
            message.alifanvalue = Number(cmd.params.WindSpeed);
        }
    }
    message.postFAN();
})


module.exports = message;