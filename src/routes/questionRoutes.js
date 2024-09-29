const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// GET all questions
router.get('/', questionController.getAllQuestions);

// POST a new question
router.post('/', questionController.createQuestion);

// PUT (update) a question by id
router.put('/:questionId', questionController.updateQuestion);

// DELETE a question by id
router.delete('/:questionId', questionController.deleteQuestion);

module.exports = router;
