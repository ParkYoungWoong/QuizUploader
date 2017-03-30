var express = require('express');
var router = express.Router();

module.exports = function (app) {
  app.use('/create', router);
};

router.get('/', function (req, res, next) {
  res.render('create', {
    title: 'Create'
  });
});