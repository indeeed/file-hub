const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // ניתן לשנות לפורט הרצוי

// Middleware
app.use(cors());
app.use(bodyParser.json());

// מסלול POST לקבלת הקבץ מ-Angular
app.post('/api/upload', (req, res) => {
  // הגעת הקובץ לשרת ניתן לטפל בו כאן
  // req.body מכיל את הנתונים שנשלחו מ-Angular
  console.log('הגיעה בקשה POST מ-Angular.');
  console.log('גוף הבקשה:', req.body);

  // כאן תוכל לטפל בקובץ ולשלוף ממנו את הנתונים שאתה רוצה

  // לדוגמה, נשלח תשובה חזרה ל-Angular
  res.status(200).json({ message: 'הבקשה התקבלה בהצלחה.' });
});

// התחברות השרת לפורט המוגדר
app.listen(port, () => {
  console.log(`השרת פועל בפורט ${port}`);
});