const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/items', (req, res) => {
  // כאן תוכל לקבוע איך לשלוף את המידע מה-Akita Store
  res.json({ items: [] }); // לדוגמה, רשימת פריטים ריקה כרגע
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});