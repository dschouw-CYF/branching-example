// express server with one route
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.delete('/users/:id', (req, res) => {
    // delete user
    res.send('User deleted');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
