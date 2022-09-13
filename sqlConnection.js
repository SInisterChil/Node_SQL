const mysql = require('mysql');

const connection = mysql.createConnection(config : {
    host: 'localhost', 
    port: 3306,
    database: 'test',
    user: 'root',
    password: 'password'
})

connection.connect( function(err){
    if(err){
        console.error("Error occurred")
    }
    else {
        console.log("Connected with mySQL successfully")
    }
})

module.exports = connection;