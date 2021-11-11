const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'pizzadatabase',
});

app.use(cors())
app.use(express.json())
app.use (express.urlencoded ({extended: true}));


app.post("/api/insert", (req, res) => {

const customer_name = req.body.customer_name;
const phone_num = req.body.phone_num;
const c_password = req.body.c_password;
const ADDRESS = req.body.ADDRESS;
const CITY = req.body.CITY;
const STATE = req.body.STATE;
const COUNTRY = req.body.COUNTRY;
const ZIPCODE = req.body.ZIPCODE;

    const sqlInsert = "INSERT INTO customer (customer_name, phone_num, c_password) VALUES (?,?,?)";
    const sqlInsert2 = "INSERT INTO address (ADDRESS, CITY, STATE, COUNTRY, ZIPCODE) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [customer_name, phone_num, c_password], (err, result) => {
        console.log(err)
    });
    db.query(sqlInsert2, [ADDRESS, CITY, STATE, COUNTRY, ZIPCODE], (err, result) => {
        console.log(err)
    });
});

app.post('/login', (req, res) => {

const phone_num = req.body.phone_num;
const c_password = req.body.c_password;


    const sqlInsert = "SELECT * FROM customer WHERE phone_num = ? AND c_password = ?";

    db.query(sqlInsert, [phone_num, c_password], (err, result) => {

        if(err)
        {
            res.send({err: err})
        }

        if (result.length > 0){
            res.send(result)
        }
        else{
            res.send({message: "Wrong username/password"})
        }

    });
})

app.listen(3001, () => {
    console.log('running on port 3001');
});
