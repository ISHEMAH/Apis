const express = require('express');
const app = express();

app.get('/multiplication', (req, res) => {
  const numbers = req.query.numbers;
  let result = 1;
  numbers.forEach((number) => {
    result *= Number(number);
  });
  res.json({ result });
});

app.listen(3000, () => {
  console.log('hey its ishema!');
});
