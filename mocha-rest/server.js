let mongoose = require('mongoose');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let book = require('./book-routes');

// db connection      
mongoose.connect('127.0.0.1');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// parse application/json and look for raw text                                        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

// create routes​
app.get("/", (req, res) => res.json({ message: "Welcome to our Bookstore!" }));
app.route("/book")
    .get(book.getBooks)
    .post(book.postBook);
app.route("/book/:id")
    .get(book.getBook)
    .delete(book.deleteBook)
    .put(book.updateBook);

    // start listening
app.listen(8080);
console.log("Listening on port " + '8080');

module.exports = app; // export the server for testing puposes​
