module.exports = function (app) {

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

    app.get('/hero', function (req, res) {
        res.send('hello world')
      })

    app.post('/quotes', (req, res) => {
        db.collection('quotes').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('saved to database')
            console.log(req.body)
            res.redirect('/')
        })
    })

    app.get('/quotes', (req, res) => {
        var cursor = db.collection('quotes').find()

        db.collection('quotes').find().toArray(function (err, results) {
            console.log(results[0])
            res.send({ "meals": results[0] })
            // send HTML file populated with quotes herey
        })
    })
};