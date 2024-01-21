const httpResult = require("../common/httpResult");

module.exports = (req, res, next) => {
  res.result = (code=200, msg='success', data) => {
    res.json(httpResult.result(code, msg, data));
  };
  res.fail = (errData)=>{
    res.json(httpResult.fail(errData));
  };
  res.success = (data)=>{
    res.json(httpResult.success(data));
  }
  next();
};
