const express = require('express');

const PORT = 3003
const app = express();

app.use(express.json())

app.disable('x-powered-by');
app.disable('etag')

app.get('/', async (req, res) => {
  res.send('Ok');
});

app.listen(PORT, () => {
  console.log(`Application is listening at http://localhost:${PORT}`);
});