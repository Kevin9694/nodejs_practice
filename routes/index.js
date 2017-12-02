var express = require('express');
var router = express.Router();

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
})
module.exports = router;
