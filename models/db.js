const mysql = require('mysql')

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'nutnut123456',
    database: 'demo'
})

con.connect((err)=>{
    if(err){
        console.log('Error connecting to database', err)
    }
    else{
        console.log('Connected to database')
    }
})


module.exports = con