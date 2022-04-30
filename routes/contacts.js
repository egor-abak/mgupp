const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('archive/contacts');
  });

  module.exports = router;