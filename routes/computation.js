var express = require('express');
var router = express.Router();


/* GET mydata. */
router.get('/', function(req, res, next) {
  let x = 0
  let y = 0
  console.log(req.query.x)
  if(req.query.x){
    x = req.query.x
  }else{
    x = ((Math.random()*2)-1).toPrecision(3);//the domain of atanh() is (-1,1)
  }
  y = Math.atanh(x).toPrecision(3);
  res.render('computation', { title: 'Computation',fn:'atanh()',x:x,y:y});
  
});

module.exports = router;
