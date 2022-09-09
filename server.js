const express = require ("express");
const app = express();
const dotenv = require("dotenv")


dotenv.config({path: './views/config.env'})

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    res.send("welcome to local sever")
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})

