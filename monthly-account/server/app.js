const express = require('express');
const app =  express();

app.listen(8080, function (){
    console.log("hello? listen port is 8080")
});

app.get('/', (req,res)=> {
    res.status(200).send('success');
});