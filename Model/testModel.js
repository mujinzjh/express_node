const DbBase = require('../config/DB_BASE');

class TextModel extends DbBase {
  constructor() {
    super();
    this.table = 'bk_user';
  }

  getAllUsers(callback) {
    let sql =  `SELECT * FROM ${this.table}`;
    this.mqDb.query(sql, (err, result) => {
      if (err) {
        return err;
      } else {
        callback(result);
      }
    });
  }
}


module.exports = TextModel;