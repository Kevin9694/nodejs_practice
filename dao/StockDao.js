var mysql = require('mysql');
// var conf = require('./config/db');
var conf = require('../config/db');
var sql = require('./StockSqlMapping');

var pool = mysql.createPool( conf.mysql );
// var con = mysql.createConnection(conf.mysql);

var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {

        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // var param = req.params;
            // print(param.stockname);
            // console.log(param.stockname);
            // console.log(req.query.stockname);
            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            var q = "INSERT INTO StockDR(StockName, Date, OpenPrice, ClosePrice, HighPrice, LowPrice, TotalTurnover, Volume, Industry, Sector) VALUES ("+
                param.stockname + "," + param.date + "," + param.openprice + "," + param.closeprice + "," +
                param.highprice + "," + param.lowprice + "," + param.totalturnover + "," + param.volume + "," + "'" + param.industry + "'" + "," + "'" + param.sector + "'" +
                ");";
            console.log(q);
            pool.query(q,function (err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加成功'
                    };
                }

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接
                pool.end();
            });
        });
    }
};