const express = require('express');
const app = express();
const port = 3001;


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});


app.get('/', (req, res) => {
  console.log('Messaggio inviato');

  res.send('Server del mio blog');
});