var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Alien/empty-example/index');
});

module.exports = router;
