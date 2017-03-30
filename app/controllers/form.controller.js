var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../models/quizzes.model');
var Quiz = mongoose.model('Quiz');

module.exports = function (app) {
  app.use('/form', router);
};

router.post('/', function (req, res, next) {
  var quiz = new Quiz();

  quiz.codeType = req.body.codeType;
  quiz.quiz = req.body.quiz;
  quiz.exam1 = req.body.exam1;
  quiz.exam2 = req.body.exam2;
  quiz.exam3 = req.body.exam3;

  quiz.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.render('index', {
      title: 'index'
    });
  });
});

router.post('/update', function (req, res, next) {

  Quiz.update({
    id: req.body._id
  },
  { $set: {
    codeType: req.body.codeType,
    quiz: req.body.quiz,
    exam1: req.body.exam1,
    exam2: req.body.exam2,
    exam3: req.body.exam3
  }},
  function (err) {

    if (err) {
      console.log(err);
      return;
    }

    res.redirect('/');
  });
});