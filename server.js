import express, { json } from 'express';
import { readFileSync } from 'fs';

const app = express();
const port = 4000;

app.use(json());

app.post('/api/data', (req, res) => {
  const data = req.body;
  writeFileSync('data.json', JSON.stringify(data));
  res.send('Data saved successfully!');
});

app.get('/api/data', (req, res) => {
  const data = readFileSync('data.json');
  res.send(data.toString());
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
