//阿里云设备配置
const iot = require('alibabacloud-iot-device-sdk');

var device = {
    led1: iot.device({
        "ProductKey": "a13FZl5d5Rq",
        "DeviceName": "led1",
        "DeviceSecret": "c2de14e2edb3ab708f28130c88acd792"
    }),//灯
    temp1: iot.device({
        "ProductKey": "a1kblpmSRsx",
        "DeviceName": "temp1",
        "DeviceSecret": "089b3a444347f16c7eba574f59fee4fc"
    }),//温度传感器
    humidity1: iot.device({
        "ProductKey": "a16XAMoOZ0s",
        "DeviceName": "humidity1",
        "DeviceSecret": "cf6f0e72195845c220595192aae4e16e"
    }),//湿度传感器
    humidifier: iot.device({
        "ProductKey": "a1ZFfoK1zQB",
        "DeviceName": "humidifier",
        "DeviceSecret": "9726a8e5de0c0017c2eec0f47d89b7d0"
    }),//加湿器
    warmer: iot.device({
        "ProductKey": "a1mVKBkNuTc",
        "DeviceName": "warmer",
        "DeviceSecret": "adeaf0241a7b276732dff9a3caaf63a3"
    }),//取暖器
    airconditioner: iot.device({
        "ProductKey": "a1FhLCr2CJ4",
        "DeviceName": "air-conditioner",
        "DeviceSecret": "0eac00be09761f2cf5a606057426a964"
    }),//空调
    fan1: iot.device({
        "ProductKey": "a14J7O6Lbst",
        "DeviceName": "fan1",
        "DeviceSecret": "92a2e8d274240b9559f053ebca5d9135"
    })//电风扇
    //等等，添加进去
}
module.exports = device;