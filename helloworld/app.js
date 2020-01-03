// const http = require('http');
// var url = require('url')
// var port = 3000;
// var server = http.createServer((req, res)=>{
//     var path = req.url;
//     console.log("Server has been created on port 3000");
//     res.write(path);
//     res.end();
// });
// server.listen(port,()=>{
//     console.log('server has started listening on prot no 3000');
// });

var express = require('express');
var app = express();
var port = 3000;

app.get('/hello', (req, res)=>{
    res.write('Hello Express');
    res.end();
});

app.listen(port, ()=>{
    console.log('app is litening on port no 3000');
});