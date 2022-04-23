const express =require('express');
const mongoose =require('mongoose');
const bodyparser =require('body-parser');
const path=require('path');
const http=require('http');
const User=require('./model/user.js');
const db=require('./database-connection');
const { async } = require('rxjs');
const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.json());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept");

res.setHeader(
  "Access-Control-Allow-Methods",
  'GET, POST, DELETE, PUT, OPTIONS'
);
next();
});
app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get('/users',async(req,res,next)=>{
  try{

      const users =await User.find()
      res.json(users)


  }catch(err){
      res.send('Error' +err)
  }
  next();
})


app.get('/:id',(req,res,next)=>{
  try{

      const user = User.findById(req.params.id)
      res.json(user)


  }catch(err){
      res.send('Error' +err)
  }
  next;
})


app.post('/users',async(req,res,next)=>{
  console.log(req.body)
  const user = await User({
      username:    req.body.username,
      userage:     req.body.userage,
      useremail:   req.body.useremail,
      userpn:      req.body.userpn,
      usercomments:req.body.usercomments

  })

  try{
      const u1=user.save()
      res.json(u1)
  }catch(err){
      // res.send(err)
  }
  next
})

module.exports=app
