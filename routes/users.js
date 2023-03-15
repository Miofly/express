var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    data: ['12312', 'sdasda']
  });
});

router.get('/wfd', function (req, res, next) {
  res.json({
    data: ['wfd', 'sdasda']
  });
});

module.exports = router;
