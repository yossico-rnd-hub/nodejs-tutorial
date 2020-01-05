// import express package for creating the express server
const express = require('express');
const app = express(); // create an express object

const port = 8000; // setting server port to 8000

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

// start listening
app.listen(port, function (err) {
    if (err) {
        console.log('error while starting the server:', err);
    } else {
        console.log('server listening at port ' + port);
    }
});
