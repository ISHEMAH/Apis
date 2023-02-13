const express = require('express');
const app = express();

app.get('/addition', (req, res) => {
  const numbers = req.query.numbers;
  const result = numbers.reduce((a, b) => a + b, 0);
  res.json({ result });
});

app.listen(3000, () => {
  console.log('Hey its Hugues');
});
