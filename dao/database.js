var mysql = require('mysql');
var mysqlconfig = require('../config/mysql');
var con;
var data = {
    insert(id, type, status) {
        //每次都需要创建新的连接
        con = mysql.createConnection(mysqlconfig.mysql);
        con.connect();
        var sql = "INSERT INTO data (id,type,value) VALUES ('" + id + "','" + type + "','" + status + "');";
        console.log(sql);
        con.query(sql);//还可以设置返回值
        con.end();
    }
}
var device = {

}
var user = {
    update(name, password) {
        con = mysql.createConnection(mysqlconfig.mysql);
        con.connect();
        var sql = "UPDATE user set password = '" + password + "' where name = '" + name + "'";//sql语句，修改设备信息
        console.log(sql);
        con.query(sql);//还可以设置返回值
        con.end();
    }
}
module.exports = {
    data: data,
    device: device,
    user: user
};