const express = require('express');
const router = express.Router();
const signUpControl = require('../controllers/signupControl');

router.get("/", (req,res)=>{
  res.send("Sign Up Page");
})

router.post("/", signUpControl);

module.exports = router;