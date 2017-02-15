var express = require('express');
var router = express.Router();

var Report = require('./models/report');

router.get('/reports', function (req, res) {
  var result = [
      new Report( 'New Trades', 'graph about trades', 'ssrs', 'http://tradesgraph.com' ),
      new Report( 'Song titles', 'graph about song titles', 'tableau', 'http://songs.com' ),
      new Report( 'Delicious data', 'graph about burritos', 'excel', 'http://burritos.com' )
  ];
  res.json(result);
});

module.exports = router
