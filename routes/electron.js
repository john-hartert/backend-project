var express = require('express');
var router = express.Router();
var electron = require('electron').globalPaths.push(searchPath);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'bobobobobobob' });
});



module.exports = router;
