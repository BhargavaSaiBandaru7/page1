const express =require('express');
const mongoose =require('mongoose');
const bodyparser =require('body-parser');
const path=require('path');
const http=require('http')
const cors=require('cors')

const app=require("./backend/app");
app.use(cors)
app.use(express.json())
app.use(express.static(__dirname+"/dist/page"));

app.get("/*", (req,res)=>res.sendFile(path.join(__dirname)));

app.get('*', (req, res) => {

    res.sendFile(__dirname + '/dist/page/index.html');

  });

const server = http.createServer(app);

server.listen(3000);