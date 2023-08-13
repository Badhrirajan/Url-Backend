const express = require('express')
const app = express();
const cors = require('cors')
const UserRouter = require('./Controllers/UserController')
const UrlRouter = require('./Controllers/URLController')
const mongoose = require('mongoose')
const URL = 'mongodb+srv://Badhrirajan:Badhri2211@cluster0.gxfd2vs.mongodb.net/URLCOLLECTION'

const port = 5000

async function Connect(){
    try{
        await mongoose.connect(URL)
        console.log("DATABASE CONNECTION SUCCESSFULL")
    } catch{
        console.log("ERROR IN DB CONNECTION")
    }
}

Connect();

app.listen(port, '0.0.0.0', () => {
    console.log("SERVER SUCCESSFULLY CONNECTED",port)
})

app.get('/', (req,res) => {
    return res.status(200).json({
        message: "API CREATED SUCCESSFULLY"
    })
})

app.use(cors())
app.use(express.json())
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use('/', UrlRouter)
app.use('/', UserRouter)