var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/views/Day 3 # Alien/empty-example/index');
});

module.exports = router;
