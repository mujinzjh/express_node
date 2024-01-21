const router = require("../config/router.config");
const TestModel = require("../Model/testModel");
const _testModel =  new TestModel();
router.get('/all', (req, res) => {
  _testModel.getAllUsers((data)=>{
    return res.success(data);
    // return httpResult.success(data);
  });
});

module.exports = router;
