var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Error', (req,res,next)=>{
    console.log(__dirname);
    res.send(__dirname);
    next();
})

router.use(()=>{
  console.log(new Date());
})

module.exports = router;
