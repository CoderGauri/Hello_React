const express = require('express');

const app = express();
//methods get post put delete

app.get('/' , (req , res) => {
res.send("Hello from express JS")
});

app.get('/about' , (req, res)=> {
    res.send("Hello this page will tell you express")
});

app.get('/contact' , (req, res)=> {
    res.send("Hello contact us through this page ")
});
//app.put();
//app.post();
//app.delete();

//Route Parameter
app.get('/courses/:id' , (req, res)=> {
    
   res.send(req.params.id) 
});

const port = process.env.PORT || 3000

app.listen(port , () => {
    console.log(`port is running on ${port}`);
});