const express = require('express');
const router = express.Router();
const loginControl = require('../controllers/loginControl');
const Users = require('../model/userModel');

router.get("/", async(req,res)=>{
  // console.log(await Users.find({}))
  res.send("Log In Route");
  
})

router.post("/",loginControl);


module.exports = router;