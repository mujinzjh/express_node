const mysql = require('mysql2');

class DbBase {
  constructor(){
    this.mqDb = mysql.createConnection(require('./db.config'));
    this.mqDb.connect(); // 链接到数据库
  }

  end(){
    this.mqDb.end();
  }
}

module.exports = DbBase;