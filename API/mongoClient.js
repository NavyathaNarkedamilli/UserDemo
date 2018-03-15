
var dbconnection;

var mongodbPromise = new Promise((resolve, reject) => {

    MongoClient.connect('mongodb://abc:123@ds113799.mlab.com:13799/userdb', function (err, database) {
        if (err) {

            reject(err);

        } else {
            console.log("successfully connected to the database");
            dbconnection = database.db("userdb");
            resolve(mongodbPromise);

        }

    })

})

module.exports = mongodbPromise;