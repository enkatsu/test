const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/users');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', users);

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
