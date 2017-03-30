var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../models/quizzes.model');
var Quiz = mongoose.model('Quiz');

module.exports = function (app) {
  app.use('/search', router);
};

router.get('/:id', function (req, res, next) {

  Quiz.findOne({ _id: req.params.id }, function (err, data) {
    if (err) return next(err);
    console.log(data);

    res.send(200, data);
  });
});