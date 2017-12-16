var express = require('express');
var router = express.Router();
var StockDao = require('../dao/StockDao');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* new page */
router.get('/newhomepage', function (req, res, next) {
    res.render('newhomepage',{title: 'newhomepage' });
});
router.get('/data-collection',function (req,res) {
    var id = req.query.id;
    var name = req.query.name;
    console.log(id);
    console.log(name);
});
router.get('/addStockData',function (req, res, next) {
    StockDao.add(req,res,next);
});

module.exports = router;
