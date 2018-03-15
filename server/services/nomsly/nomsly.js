module.exports = function (app) {
    const moment = require('moment')
    
    //Setup connection to Mongo DB on mLab
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



    app.get("/getMeal", getMeal);
    app.post("/newMeal", newMeal);
    app.get('/meals', meals);
    app.post("/updateMeal", updateMeal);
    app.post("/vote", vote);
    app.post("/stocking", stocking);
    app.get('/CurrentAccounts', CurrentAccounts);
    app.post("/newAccount", newAccount);
    app.post("/updateAccount", updateAccount);

    
    function getMeal (req, res) {
        let mealId = req.query.mealId
        console.log("Meal request for meal id: " + mealId);

        db.collection('meals').find({id: parseInt(mealId)}).toArray(function (err, results) {
            if(results == undefined || results == 0 || results > 1){
                console.log("Invalid MealId Query")
            }
            return res.send({ meal: results[0]})
        })
    };

    function newMeal(req, res) {
        let msg = req.body;
        let meal;
        let newID = Math.floor(100000000 + Math.random() * 900000000);
        if(msg.meal == null){
            meal = {
                id: newID,
                name: "New Meal",
                imageLink: "",
                description: "",
                contents: "",
                quantity: 1
            };
        }
        else {
            meal = msg.meal;
            newID = msg.meal.id;
        }
    
        db.collection('meals').save(meal, (err, result) => {
            if (err) return console.log(err)

            console.log('saved to database')
        })
        res.send({ "id": newID })
    };

    function meals(req, res) {
        let accountNumber = req.query.account

        //default response sends all meals
        if (accountNumber == "undefined" || accountNumber == "") {
            console.log("default call for meals")

            db.collection('meals').find().toArray(function (err, results) {
                res.send({ "meals": results })
            })
        }

        else {
            db.collection('clientAccounts').find({id: parseInt(accountNumber)}).toArray(function (err, results) {
                if(results == undefined || results == 0 || results > 1){
                    console.log("Invalid accountNumber Query")
                    return;
                }

                let account = results[0];

                db.collection('meals').find().toArray(function (err, results) {
                    let meals_db = results;

                    console.log(account.name + " id(" + parseInt(accountNumber) + ") requested meal data")
                
                    let returnMeals = []
            
                    for (let i = 0; i <  account.mealNumbers.length; i++) {
                        returnMeals = returnMeals.concat(
                            meals_db.find(function (meal) {
                                return meal.id == parseInt(account.mealNumbers[i]);
                            })
                        )
                    }
                    if(account.stockWarning.length > 0){
                        for(let i=0; i <account.stockWarning.length; i++){
                            for(let j=0; j < returnMeals.length; j++){
                                if(account.stockWarning[i].mealID == returnMeals[j].id){
                                    console.log("Out of stock match")
                                    returnMeals[j].quantity = account.stockWarning[i].mealQuantity;
                                }
                            }
                        }
                    }
                    
                    res.send({ "meals": returnMeals })
                });
            });
        }
    };

    function updateMeal(req, res) {
        let msg = req.body;
        console.log("Meal: " + msg.meal.id + " Will be updated");

        res.send({ message: "Update recieved" });

        var myquery = { id: parseInt(msg.meal.id) };
        var newvalues = { $set: {
            name: msg.meal.name,
            imageLink: msg.meal.imageLink,
            description: msg.meal.description,
            contents: msg.meal.contents,
            quantity: msg.meal.quantity,
            }};
        db.collection("meals").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
        });
    };

    function vote(req, res) {
        let msg = req.body;
        let now = moment();

        var accountNumber = req.query.account;
        var NewAccountVote = req.body.vote;
        var NewMealLikedName = req.body.mealLiked.name;
        var NewMealLikedId = req.body.mealLiked.id;

        console.log("Account: " + accountNumber + " voted they " + NewAccountVote + " " + NewMealLikedName + " at " + now.format('YYYY-MM-DD HH:mm:ss Z'));

        res.send({ message: "Vote recieved!" });
        
        try {
        db.collection('clientAccounts').find({id: parseInt(accountNumber)}).toArray(function (err, results) {
            if(results == undefined || results == 0 || results > 1){
                console.log("Invalid accountNumber Query")
                return;
            }
            let account = results[0];
            account.mealVotes = account.mealVotes.concat([{
                name: account.name,
                vote: NewAccountVote,
                mealVotedFor: NewMealLikedName,
                mealVotedForID: NewMealLikedId,
                time: now.format('YYYY-MM-DD HH:mm:ss Z')
            }]);
            console.log("Check Here!:")
            console.log(account.mealVotes)

            var myquery = { id: parseInt(req.query.account) };
            var newvalues = { $set: {
                mealVotes: account.mealVotes
                }};
            db.collection("clientAccounts").updateOne(myquery, newvalues, function(err, res) {
              //if (err) throw err;
              console.log("Vote correctly added to system");
            });
        })
        }
        catch (error) {
            console.log("ERROR! " + error)
            console.log("Cannot find accountNumber")
        }
    };

    function stocking(req, res) {
        let meal = req.body.meal;
        let now = moment()
        console.log("Account " + req.query.account + " has " + meal.quantity + " stock of: " + meal.name);
        res.send({ message: "Stocking notice recieved!" });

        account_db = {};
        db.collection('clientAccounts').find().toArray(function (err, results) {
            account_db = results;
            
            //Add/remove stocking warning
            try {
                var accountNumber = req.query.account;
                account_db.find(function (account) {
                    if (account.id == parseInt(accountNumber)) {
                        //Remove from warnings if quantity is greater than 1
                        if(meal.quantity >= 1){
                            for(let i =0; i < account.stockWarning.length; i++){
                                if(account.stockWarning[i].meal == meal.name){
                                    console.log("Removed from warnings");
                                    account.stockWarning.splice(i, 1)
                                }
                            }
                        }
                        //Add to warnings
                        else {
                            account.stockWarning = account.stockWarning.concat([{
                                name: account.name,
                                accountId: account.id,
                                meal: meal.name,
                                mealID: meal.id,
                                mealQuantity: meal.quantity,
                                time: now.format('YYYY-MM-DD HH:mm:ss Z')
                            }])
                        }

                        var myquery = { id: parseInt(accountNumber) };
                        var newvalues = { $set: {
                            stockWarning: account.stockWarning
                            }};
                        db.collection("clientAccounts").updateOne(myquery, newvalues, function(err, res) {
                          if (err) throw err;
                          console.log("1 document updated");
                        });
                    }
                    return;
                })
            }
            catch (error) {
                console.log("ERROR! " + error)
                console.log("Cannot find accountNumber")
            }
        })
    };

    function CurrentAccounts(req, res) {
        db.collection('clientAccounts').find().toArray(function (err, results) {
            res.send({ "accounts": results })
        })
    };

    function newAccount(req, res) {
        let msg = req.body;
        let account;
        let newID = Math.floor(100000000 + Math.random() * 900000000);
        if(msg.account == null){
            account = {
                id: newID,
                name: "New Account Name",
                mealNumbers: [],
                mealVotes: [],
                stockWarning: []
            };
        }
        else {
            account = msg.account;
            newID = msg.account.id;
        } 

        db.collection('clientAccounts').save(account, (err, result) => {
            if (err) return console.log(err)
            console.log('saved to database')
        })
        res.send({ "id": newID })
    }


    function updateAccount(req, res) {
        let msg = req.body;
        let now = moment()
        console.log("Account: " + msg.account.id + " Will be updated");

        var myquery = { id: parseInt(msg.account.id) };
        var newvalues = { $set: {
            name: msg.account.name,
            mealNumbers: msg.account.mealNumbers,
            mealVotes: msg.account.mealVotes,
            stockWarning: msg.account.stockWarning,
            }};
        db.collection("clientAccounts").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
        });

        res.send({ message: "Update recieved" });
    };
};
