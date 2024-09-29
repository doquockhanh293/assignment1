const Quiz = require('../models/quiz');

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('questions');
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createQuiz = async (req, res) => {
  const quiz = new Quiz({
    title: req.body.title,
    description: req.body.description,
    questions: req.body.questions
  });

  try {
    const newQuiz = await quiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.quizId, req.body, { new: true });
    res.status(200).json(updatedQuiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.quizId);
    res.status(200).json({ message: 'Quiz deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
