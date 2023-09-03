const express = require('express');
const app = express();
const port = 5000;
const data = require('./temp.json')
const cors = require('cors');
var myHeaders = new Headers();
myHeaders.append("authorization_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MTkxMjMsImNvbXBhbnlOYW1lIjoiSnRhaW5zIiwiY2xpZW50SUQiOiI2ZDA3NzlhNC1jYWFhLTRlYzUtYWM3MC02ZWZkMzk0ZGRlNjkiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjE1MDVhMDUxNSJ9.21nHlcs0m1TK-FH4LQYAHe_a3h-VXqBljIqOR_U39ZA");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MTk2MjEsImNvbXBhbnlOYW1lIjoiSnRhaW5zIiwiY2xpZW50SUQiOiI2ZDA3NzlhNC1jYWFhLTRlYzUtYWM3MC02ZWZkMzk0ZGRlNjkiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjE1MDVhMDUxNSJ9._ghff7UeNJP20amynljMzPqN0sOZNOJbgDabz8dHlEY");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
app.use(cors({
    origin: '*'
}));
app.get('/trains',(req,res)=>{
    fetch("http://20.244.56.144/train/trains", requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result);

        res.json(result);
        res.end()
    })
    .catch(error => console.log('error', error));
    
})

app.get('/trains/:tNum',(req,res)=>{
    console.log(req.params.tNum)
    const t = data.filter(data=> data.trainNumber == req.params.tNum)
    res.json(t);
    res.end()
})

app.listen(port,(err)=>{
    if(err){
        console.log("Server starting failed");
        return;
    }
    console.log(`Server running successfullt on port:${port}`)
})