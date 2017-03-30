var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// require('../models/quizzes.model');
var Quiz = mongoose.model('Quiz');

module.exports = function (app) {
  app.use('/read', router);
};

router.get('/', function (req, res, next) {
  Quiz.findOne({codeType: 'css'}, function (err, docs) {
    console.log(docs);
    res.render('read', {
      title: 'Read',
      docs: docs
    });
  });
});