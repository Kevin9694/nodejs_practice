var express = require('express');
var router = express.Router();
var StockDao = require('../dao/StockDao');

/* GET users listing. */
router.get('/addStockData', function (req, res, next) {
    StockDao.add(req,res,next);
})
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
