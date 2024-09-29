const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// GET all quizzes
router.get('/', quizController.getAllQuizzes);

// POST a new quiz
router.post('/', quizController.createQuiz);

// PUT (update) a quiz by id
router.put('/:quizId', quizController.updateQuiz);

// DELETE a quiz by id
router.delete('/:quizId', quizController.deleteQuiz);

module.exports = router;
