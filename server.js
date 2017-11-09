const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function () {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})



var db

const url = 'mongodb://justinmongo:aFoolishPass4Mongo@ds251845.mlab.com:51845/test-db-personal-website';

MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err)

    db = database
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        console.log(req.body)
        res.redirect('/')
    })
})