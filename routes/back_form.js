const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('archive/back_form');
  });

  module.exports = router;