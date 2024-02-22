const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const urlRoutes = require('./routes/urlRoutes')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
//this was why it did not work, it was a typo
//I wrote app.use(bodyParser.json) without the extra parenthesis() 
//It is fixed below and the postman request worked
app.use(bodyParser.json())

app.use('/urls',urlRoutes)
const PORT = 3001

app.listen(PORT,()=>{
    console.log('Server Running on ', PORT)
})