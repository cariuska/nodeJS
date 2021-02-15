const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/hello', (req, res) => {
    res.send('Hello User');
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Listening'))