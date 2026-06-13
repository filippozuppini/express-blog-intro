const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));


const posts = [
  {
    title: "chi sono",
    content: "Ciao mi chiamo Filippo ho 24 anni",
    image: "/img/ciambellone.jpeg",
    tags: ["me", "la-mia-storia"],
  },
  {
    title: "titolo di studio",
    content: "Ho la terza media",
    image: "/img/ciambellone.jpeg",
    tags: ["studio", "scuola"],
  },
  {
    title: "i miei hobby",
    content: "Non ho hobby",
    image: "/img/ciambellone.jpeg",
    tags: ["hobby", "passione"],
  },
  {
    title: "le mie abilitá",
    content: "Non ho abilitá",
    image: "/img/ciambellone.jpeg",
    tags: ["abilitá", "booooh"],
  },
  {
    title: "non lo so",
    content: "non lo so",
    image: "/img/ciambellone.jpeg",
    tags: ["booh", "booh2"],
  }

]


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});


app.get('/', (req, res) => {
  console.log('Messaggio inviato');

  res.send('Server del mio blog');
});


app.get('/bacheca', (req, res) => {

  res.send(posts);

});
