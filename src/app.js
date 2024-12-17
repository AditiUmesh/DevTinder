const express = require('express');

const app = express();

app.use("/home", (req, res)=>{
    res.send("Namaste from home page");
});

app.use("/test", (req, res)=>{
    res.send("Namaste from server");
});

app.use("/", (req,res)=>{
    res.send('Hello');
});


app.listen('3000', ()=>{
    console.log("Server is running");
});