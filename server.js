const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Listening'))