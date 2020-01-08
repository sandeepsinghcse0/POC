var express = require('express');
var path = require('path');
var http = require('http');
var orgnization = require('../module/orgnization.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("here")
  http.get('http://172.19.101.133:3000/get_data_in_preorder_form', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
       //console.log(data)
       var orgstucter = orgnization.getOrnizationTree(JSON.parse(data));
       res.send(orgstucter);
    });
  }).on("error", (err) => {
    res.status(404).json("Error: " + err.message);
  }).end();

  next();
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
