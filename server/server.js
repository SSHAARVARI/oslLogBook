
const express=require('express')
const app=express()
const path=require('path')
const cookieParser=require('cookie-parser')
const dotenv=require('dotenv').config()
const port=process.env.PORT || 9000


app.use(cookieParser())

app.use(express.urlencoded())
app.use(express.json())


app.listen(port,()=>{
    console.log(__dirname)
    console.log(`Running on ${port}...`)
})
app.use('/login',express.static(path.join(__dirname,'../client')))
app.use('/register',express.static(path.join(__dirname,'../client')))

module.exports=app 