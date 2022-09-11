const express = require ("express");
const app = express();
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser")
const path = require("path")

const connectDB = require('./server/database/connection')


dotenv.config({path: './views/config.env'})

const PORT = process.env.PORT;

// log req

app.use(morgan('tiny'))
// mongodb connection
connectDB()
// parse req to bodyparser

app.use(bodyparser.urlencoded({extended: true}))

// view engine

app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname,"views/ejs"))


// load asset
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/css', express.static(path.resolve(__dirname,"assets/img")))
app.use('/css', express.static(path.resolve(__dirname,"assets/js")))

// loading routers
app.use('/',require('./server/routes/router'))


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})

