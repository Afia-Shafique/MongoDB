const express = require('express')
const StudentRoute = require('./routes/StudentRoute')
const connectMongoDB = require('./connection')
const app = express()
const URL = "mongodb+srv://afiaxhafiq:mongo.1234@cluster0.ld0dbmj.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/Student',StudentRoute)
connectMongoDB(app,PORT,URL)





