const BizResultCode = require('./errorCode');

class HttpResult {
  code;
  msg;
  data;
  constructor(code, msg, data) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  static success(data) {
    return new HttpResult(
      BizResultCode.SUCCESS.code,
      BizResultCode.SUCCESS.desc,
      data
    );
  }

  static result (code, msg, data) {
    return new HttpResult(code, msg, data);
  }
  /**
   * 失败
   */
  static fail(errData) {
    return new HttpResult(
      BizResultCode.FAILED.code,
      BizResultCode.FAILED.desc,
      errData
    );
  }
}

module.exports = HttpResult;