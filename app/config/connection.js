const mysql = require("mysql");

const data = mysql.createConnection({

    host: "local_host",
    user: "root",
    password: "Password123!",
    port: 6767,

});

data.connect(function (err){
    if (err) throw err;
    console.log("Connected!!");
});

module.exports = data;