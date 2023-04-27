import express, { json } from 'express';
import { writeFileSync } from 'fs';

const app = express();
const port = 4000;

app.use(json());

app.post('/api/data', (req, res) => {
  const data = req.body;
  writeFileSync('data.json', JSON.stringify(data));
  res.send('Data saved successfully!');
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});