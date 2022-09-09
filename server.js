const express = require ("express");
const app = express();



app.get("/", (req, res)=>{
    res.send("welcome to local sever")
})


app.listen(3000, ()=>{
    console.log("listening on port 3000");
})

