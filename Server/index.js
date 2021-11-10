const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Cr8dlek33per1!',
    database: 'pizzadatabase',
})

app.get("/", (req, res) =>{
    
    const sqlInsert = "INSERT INTO customer (customer_name, phone_num) VALUES ('John Snow', 6786686666);"
    db.query(sqlInsert, (err, result) => {
       res.send("hello Jonathan"); 
    })
    
});

app.listen(3001, () => {
    console.log('running on port 3001');
});
