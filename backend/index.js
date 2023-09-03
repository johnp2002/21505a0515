const express = require('express');
const app = express();
const port = 5000;
const data = require('./temp.json')

app.get('/trains',(req,res)=>{
    res.json(data);
    res.end()
})

app.listen(port,(err)=>{
    if(err){
        console.log("Server starting failed");
        return;
    }
    console.log(`Server running successfullt on port:${port}`)
})