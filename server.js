const express = require ("express");
const app = express();
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser")
const path = require("path")


dotenv.config({path: './views/config.env'})

const PORT = process.env.PORT;

// log req

app.use(morgan('tiny'))
// parse req to bodyparser

app.use(bodyparser.urlencoded({extended: true}))

// view engine

app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname,"views/ejs"))


// load asset
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/css', express.static(path.resolve(__dirname,"assets/img")))
app.use('/css', express.static(path.resolve(__dirname,"assets/js")))

app.get("/", (req, res)=>{
    res.render('index');
})

app.get("/add-user", (req, res)=>{
    res.render('add_user');
})


app.get("/update-user", (req, res)=>{
    res.render('update_user');
})




app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})

