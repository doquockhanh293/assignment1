const express = require('express');
const mongoose = require('mongoose');
const quizRoutes = require('./src/routes/quizRoutes');
const questionRoutes = require('./src/routes/questionRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://doquockhanh:doquockhanh@doquockhanh.idqr4.mongodb.net/SimpleQuiz', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
