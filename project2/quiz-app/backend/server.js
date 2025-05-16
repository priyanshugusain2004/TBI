const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const questions = require('./questions.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('🎉 Quiz API is running! Use /api/questions to get the questions.');
});

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
