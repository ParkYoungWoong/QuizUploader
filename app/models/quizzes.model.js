var mongoose = require('mongoose');
mongoose.set('debug', true);

var QuizSchema = mongoose.Schema({
  codeType: String,
  quiz: String,
  exam1: String,
  exam2: String,
  exam3: String
}, {
  collection: 'quizzes'
});

mongoose.model('Quiz', QuizSchema);