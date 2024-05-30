const express = require('express');

const app = express();
//methods get post put delete

app.get('/' , (req , res) => {
res.send("Hello from express JS")
});
//app.put();
//app.post();
//app.delete();

app.listen(3000 , () => {
    console.log("port is up and running");
})