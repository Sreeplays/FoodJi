require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const orderRoutes = require('./routes/orders.js')
//express app
const app = express.Router()
// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/orders', orderRoutes)

//listening to db 
mongoose.connect(process.env.MONGO_URI).then(() => {app.connect(process.env.PORT, () => {console.log("connected to mongoDB & listening to port ",process.env.PORT, "!!!")})}).catch((error) => {
console.log(error)
});

