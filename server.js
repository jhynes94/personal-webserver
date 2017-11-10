const express = require('express')
const bodyParser = require('body-parser')
const app = express()


//Setup Mongo DB
const MongoClient = require('mongodb').MongoClient
var db
const url = 'mongodb://justinmongo:aFoolishPass4Mongo@ds251845.mlab.com:51845/test-db-personal-website';
MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err)

    db = database
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

var project = require('./backend/app.js');
project(app);



app.post('/quotes', (req, res) => {    
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        console.log(req.body)
        res.redirect('/')
    })
})

app.get('/', (req, res) => {
    var cursor = db.collection('quotes').find()

    db.collection('quotes').find().toArray(function (err, results) {
        console.log(results)
        // send HTML file populated with quotes here
    })
})
