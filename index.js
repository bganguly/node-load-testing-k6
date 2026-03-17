const express = require('express');
const app = express();

app.get('/api/data', async (req, res) => {
  // simulate slow DB
  await new Promise(r => setTimeout(r, 200));
  res.json({ message: 'data' });
});

app.listen(3000, () => console.log('Server on 3000'));