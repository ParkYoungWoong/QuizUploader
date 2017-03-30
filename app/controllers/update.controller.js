var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../models/quizzes.model');
var Quiz = mongoose.model('Quiz');

module.exports = function (app) {
  app.use('/update', router);
};

router.get('/', function (req, res, next) {

  Quiz.find({}, function (err, docs) {
    console.log(docs.length);

    res.render('update', {
      title: 'Update',
      docs: docs
    });
  });
});