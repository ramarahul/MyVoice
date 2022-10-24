const mongoose = require('mongoose');

class Database{

    constructor(){
        this.connect();
    }

    connect(){
        mongoose.connect("mongodb+srv://admin:myVoiceDBUserPassword@myvoicecluster.pdkyyfz.mongodb.net/MyVoiceDB?retryWrites=true&w=majority")
        .then(() => {
            console.log("Database Connection Successful");
        })
        .catch((err) => {
            console.log("Database Connection error" + err);
        })
    }
}

module.exports = new Database();