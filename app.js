const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Here We Go! A full pipeline test with review stages on AWS'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
