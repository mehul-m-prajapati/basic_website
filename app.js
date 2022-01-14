const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/assets/'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
});
