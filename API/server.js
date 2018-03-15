
var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
let cors = require('cors');



let port = 5234;


MongoClient.connect('mongodb://abc:123@ds113799.mlab.com:13799/userdb', function (err, database) {
    if (err) {
        throw err;
    } else {
        console.log("DB Connection established");
        dbconnection = database.db("userdb");
        app.listen(port, function () {
            console.log("server is running on " + port);
        });
    }
});

app.use(cors());
app.use(bodyParser.json())
app.use('/', router);


router.post('/register', function (req, res) {
    dbconnection.collection("userdetails").insertOne(req.body
        , function (err, result) {
            if (err) {
                res.status(500).send("internal server error");
            }
            else {
                res.status(200).send("inserted successfully");
            }
        });
});

router.post('/login', function (req, res) {
    let findObj = req.body;
    //console.log(findObj);
    dbconnection.collection("userdetails").findOne(findObj, function (err, result) {
        if (err) {
            //console.log("error");
            res.status(500).send("internal server error");
        }
        else {
            res.status(200).send(result);
        
        }
    })
});

