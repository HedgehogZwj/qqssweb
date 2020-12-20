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
    insert(req, resp) {
        //每次都需要创建新的连接
        con = mysql.createConnection(mysqlconfig.mysql);
        var id = req.body.id;
        var type = req.body.type;
        var info = req.body.info;
        con.connect();
        var sql = "INSERT INTO device (id,type,status,info) VALUES ('" + id + "','" + type + "','0','" + info + "');";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) {
                message = {
                    succ: false,
                    msg: 'add false'
                };
            }
            else {
                message = {
                    succ: true,
                    msg: 'add Success',
                };
            }
            resp.send(message);
            resp.end();
        })
        con.end();
    },
    query(id, type, resp) {
        //每次都需要创建新的连接
        con = mysql.createConnection(mysqlconfig.mysql);
        con.connect();
        var sql;
        if (id == 0) sql = "select * from device where type = '" + type + "';";
        else sql = "select * from device where type = '" + type + "' AND id = '" + id + "';";
        console.log(sql);
        con.query(sql, function (err, result) {
            console.log(result);
            resp.send(result);
            resp.end();
        })
        con.end();
    },
    delete(id, type, resp) {
        //每次都需要创建新的连接
        con = mysql.createConnection(mysqlconfig.mysql);
        con.connect();
        var sql = "DELETE from device where type = '" + type + "' AND id = '" + id + "';";
        console.log(sql);
        resp.end();
        con.query(sql);//还可以设置返回值
        con.end();
    },
    update(req, resp) {
        //每次都需要创建新的连接
        con = mysql.createConnection(mysqlconfig.mysql);
        con.connect();
        var id = req.body.id;
        var type = req.body.type;
        var info = req.body.info;
        var sql = "UPDATE device set  type= '" + type + "', info = '" + info + "' where id = '" + id + "';";//sql语句，修改用户信息
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) {
                message = {
                    succ: false,
                    msg: 'update false'
                };
            }
            else {
                message = {
                    succ: true,
                    msg: 'update Success',
                };
            }
            resp.send(message);
            resp.end();
        })
        con.end();
    }
}
var user = {
    update: function (name, password, resp) {
        con = mysql.createConnection(mysqlconfig.mysql);
        con.connect();
        var sql = "UPDATE user set password = '" + password + "' where name = '" + name + "'";//sql语句，修改用户信息
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) {
                message = {
                    succ: false,
                    msg: 'update false'
                };
            }
            else {
                message = {
                    succ: true,
                    msg: 'update Success',
                };
            }
            resp.send(message);
            resp.end();
        })
        con.end();
    },
    query: function (name, password, resp) {
        con = mysql.createConnection(mysqlconfig.mysql);
        con.connect();
        var sql = "SELECT * FROM user where name = '" + name + "' and password = '" + password + "';";
        console.log(sql);
        var message;
        con.query(sql, function (err, result) {
            if (err) {
                message = {
                    succ: false,
                    msg: 'Login false'
                };
            }
            if (result.length <= 0) {
                message = {
                    succ: false,
                    msg: 'Login false'
                };
            }
            else {
                message = {
                    succ: true,
                    msg: 'Login Success',
                };
            }
            resp.send(message);
            resp.end();
        })
        con.end();
    }

}
module.exports = {
    data: data,
    device: device,
    user: user
};